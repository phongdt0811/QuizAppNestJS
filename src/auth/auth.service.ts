import * as _ from 'lodash';
import { Injectable, UnauthorizedException, Inject, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePassword, encryptPassword } from './helper';
import { CreateUserDto } from 'src/user/dto/CreateUserDto';
import { User } from '../entities/user.entity';
import { create } from 'domain';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(user: any): Promise<any> {
    const User = await this.validateUser(user.phone, user.password);
    if(!User) throw new UnauthorizedException();
    const payload =  { sub: 1 , phone: User.phone }
    await this.userService.updateLastLogin(User);
    return {
        ..._.omit(User, 'password', 'createdAt', 'updatedAt'),
        accessToken: this.jwtService.sign(payload)
    } 
  }

  async validateUser(phone: string, password: string): Promise<any> {
    try {
        const user = await this.userService.findByPhone(phone);
            if (!user) return null
            else if (!_.isEmpty(user.password)) {
              const matchPassword = await comparePassword(password, user.password )
              if (matchPassword) {
                return user
              } else 
              throw new UnauthorizedException('Invalid Password');

            } 
    } catch (error) {
      throw new UnauthorizedException('Invalid User');
    }
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.userService.findByPhone(createUserDto.phone);
      if(user) {
        throw new BadRequestException('Exist user');
      }
      const newUser: User = await this.userService.create(createUserDto);
      return newUser;
    } catch(error) {
      throw new BadRequestException(error.message)
    }
  }
}
