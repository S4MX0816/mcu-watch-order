import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVIRONMENT } from 'src/configs/environment';
import { AuthController } from './auth.controller';
import { UserSchema, User } from './auth.model';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    JwtModule.register({
      secret: ENVIRONMENT.SECRET_KEY,
      signOptions: {
        expiresIn: ENVIRONMENT.EXPIRES_TIME,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
