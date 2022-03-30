import { Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { UserSchema, User } from './auth.model';
import { AuthService } from './auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
