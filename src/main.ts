import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
require('dotenv').config()
// import * as fs from 'fs';

// const httpsOptions = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.crt'),
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule
    // , { httpsOptions }
    );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(3005);
}
bootstrap();
