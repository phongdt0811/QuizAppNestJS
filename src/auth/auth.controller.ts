// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthGuard } from '@nestjs/passport'


@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService) 
  {}

  // @UseGuards(AuthGuard('local'))
  @Post('/signin')
  async login(@Body() user: { phone: string; password: string }): Promise<any> {
    // check password
    console.log('called api alo')
    return await this.authService.login(user);
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
