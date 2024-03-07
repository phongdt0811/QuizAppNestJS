import { Connection, Repository } from 'typeorm'

import { Question } from '../entities/question.entity'
import { DATABASE_CONNECTION, REPOSITORIES } from '../constants'

export const questionProviders = [
  {
    provide: REPOSITORIES.QUESTION,
    useFactory: (connection: Connection): Repository<Question> => connection.getRepository(Question),
    inject: [DATABASE_CONNECTION],
  }
]