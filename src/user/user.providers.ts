import { Connection, Repository } from 'typeorm'

import { User } from '../entities/user.entity'
import { DATABASE_CONNECTION, REPOSITORIES } from '../constants'

export const userProviders = [
  {
    provide: REPOSITORIES.USER,
    useFactory: (connection: Connection): Repository<User> => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  }
]