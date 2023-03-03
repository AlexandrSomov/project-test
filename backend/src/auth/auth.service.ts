import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({ email, password: pass });

    try {
      if (user && user.password === pass) {
        const { password, ...rest } = user;

        return rest;
      }
    } catch (e) {
      // ¯\_(ツ)_/¯
    }

    throw new UnauthorizedException('Wrong credentials');
  }
}
