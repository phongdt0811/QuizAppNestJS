import * as _ from 'lodash';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePassword } from './helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(user: any): Promise<any> {
    const payload =  { sub: 1 , phone: user.phone }
    return {
        ...user, 
        accessToken: this.jwtService.sign(payload)
    } 
  }

  async validateUser(phone: string, password: string): Promise<any> {
    try {
      console.log('phone here:', phone);
        const user = await this.userService.findByPhone(phone)
            if (!user) return null
            else if (!_.isEmpty(user.password)) {
              const matchPassword = await comparePassword({ passwordRaw: password, encryptedPassword: user.password })
              if (matchPassword) {
                return user
              }
            } 
    } catch (error) {
      throw new UnauthorizedException('Invalid User');
    }
  }
}
