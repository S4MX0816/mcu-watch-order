import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  async register(@Body() createUserDto: CreateUserDto) {
    const response = await this.authService.register(createUserDto);

    return {
      data: response,
      message: 'User created successfully',
    };
  }

  @Post('login')
  @ApiOperation({ summary: 'Login with user credentials' })
  async login(@Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);

    return {
      data: response,
      message: 'Logged in successfully',
    };
  }
}
