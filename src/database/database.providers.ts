import { createConnection, Connection } from 'typeorm'

import { DATABASE_CONNECTION } from '../constants'
import * as config from './ormconfig'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Connection> => {
        try {
            console.log('Test connect Database: ');
            const client = await createConnection(config);
            if(client) console.log('Connected database');
            return client;
        } catch (error) {
            console.log('Failed', error);
            throw error;
        }
    }
  }
]