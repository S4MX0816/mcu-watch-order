import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './auth.model';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

  /**
   *
   * @param createUserDto
   * @returns created user details
   */
  public async register(createUserDto: CreateUserDto) {
    const userSchema = new this.userModel({
      email: createUserDto.email,
      password: createUserDto.password,
      username: createUserDto.username,
    });
    return userSchema.save();
  }

  /**
   *
   * @param loginDto
   * @returns user with login details
   */
  public async login(loginDto: LoginDto) {
    const userInDb = await this.userModel
      .findOne({ username: loginDto.username, password: loginDto.password })
      .exec();

    if (!userInDb) {
      throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
    }

    return userInDb;
  }
}
