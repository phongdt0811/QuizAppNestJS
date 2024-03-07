import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'

import { User } from '../entities/user.entity'
import { REPOSITORIES, PUBLIC_TABLES } from '../constants'

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
}