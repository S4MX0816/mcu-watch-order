import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './auth.model';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto/login-dto';
import { JwtPayload } from './typings/payload.typing';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/helpers/password.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   *
   * @param createUserDto
   * @returns created user details
   */
  public async register(createUserDto: CreateUserDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      createUserDto.password,
    );

    const userSchema = new this.userModel({
      email: createUserDto.email,
      password: hashedPassword,
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
    const userInDb = await this.findUser(loginDto.username);
    const isPasswordValid = await this.passwordService.comparePassword(
      loginDto.password,
      userInDb.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    // generate and sign token
    const token = this._createToken(userInDb);

    return { token, userInDb };
  }

  private _createToken({ username }: CreateUserDto) {
    const expiresIn = '15h';

    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }

  async findUser(username: string) {
    const userInDb = await this.userModel.findOne({ username }).exec();
    if (!userInDb) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return userInDb;
  }
}
