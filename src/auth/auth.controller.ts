// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthGuard } from '@nestjs/passport'
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/CreateUserDto';
import { create } from 'domain';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) 
  {}

  // @UseGuards(LocalAuthGuard)
  @Post('/sign-in')
  async login(@Body() user: { phone: string; password: string }): Promise<any> {
    // check password
    console.log('API login called', user);
    return await this.authService.login(user);
  }

  @Post('/sign-up')
  async register(@Body() createUserDto: CreateUserDto) {
      return await this.authService.register(createUserDto);
  }

  // @Post('validate-token')
  // async validateToken(@Body() { token }: { token: string }): Promise<{ isValid: boolean }> {
  //   try {
  //     await this.authService.validateUser(token);
  //     return { isValid: true };
  //   } catch {
  //     return { isValid: false };
  //   }
  // }
}
