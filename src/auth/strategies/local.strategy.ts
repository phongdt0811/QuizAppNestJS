import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { User } from '../../entities/user.entity'
// import { ERRORS } from '../../constants'
import { AuthService } from '../auth.service'

/**
 * Class local strategy
 *
 * @export
 * @class LocalStrategy
 * @extends {PassportStrategy(Strategy)}
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super()
  }

  /**
   * Validate account
   *
   * @param {String} phone
   * @param {String} password 
   * @memberof LocalStrategy  
   */
  async validate(phone: string, password: string): Promise<User> {
    console.log('called validate: ', phone, password);
    const user = await this.authService.validateUser(phone, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}