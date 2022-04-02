import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './typings/payload.typing';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { CreateUserDto } from './dto/create-user.dto';
import { ENVIRONMENT } from 'src/configs/environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private authService: AuthService;

  constructor(private moduleRef: ModuleRef) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ENVIRONMENT.SECRET_KEY,
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: JwtPayload,
  ): Promise<CreateUserDto> {
    const contextId = ContextIdFactory.getByRequest(request);
    this.authService = await this.moduleRef.resolve(AuthService, contextId);
    const user = await this.authService.findUser(payload.username);
    return user;
  }
}
