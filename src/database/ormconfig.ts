
import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

import { PROD_ENV } from '../constants'

const config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
}

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: config.host || 'localhost',
  port: 5432,
  username: config.user || 'demo',
  password: config.password || 'demo',
  database: config.database || 'my_demo',
  ssl: process.env.NODE_ENV === PROD_ENV
    ? { rejectUnauthorized: false }
    : false,
  entities: [
    join(__dirname, '../entities/*{.ts,.js}')
  ],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [
    join(__dirname, 'migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: 'src/database/migrations'
  },
  extra: {
    ssl: false
  }
}

export = connectionOptions