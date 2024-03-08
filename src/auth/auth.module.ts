import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local-strategy';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import TypeOrModule from 'typeorm'
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`, 
      signOptions: { expiresIn: '1h' }, 
    })

  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
