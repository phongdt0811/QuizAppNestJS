import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'

import { User } from '../entities/user.entity'
import { REPOSITORIES, PUBLIC_TABLES } from '../constants'
import { CreateUserDto } from './dto/CreateUserDto'
import { encryptPassword } from 'src/auth/helper'

@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORIES.USER)
    private readonly repository: Repository<User>
  ) { }

  async findByPhone(phone: string): Promise<User> {
    const rawData = await this.repository.query(
      `SELECT * FROM ${PUBLIC_TABLES.USER} WHERE phone = $1;`,
      [ phone ]
    )
    return rawData[0]
  }

  async findOne(id: string): Promise<User> {
    return this.repository.findOne(id)
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.repository.findOne({ phone: createUserDto.phone });
    if(existingUser) return null;

    const hashedPassword = await encryptPassword(createUserDto.password);
    createUserDto.password = hashedPassword;
    
    const newUser = await this.repository.create(createUserDto);
    await this.repository.save(newUser);
    return newUser;
  }

  async updateLastLogin(user: User): Promise<User> {
    user.lastLoginAt = new Date();
    await this.repository.save(user);
    return user;
  }

}