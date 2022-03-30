import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'abc@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Test@123' })
  password: string;

  @ApiProperty({ example: 'AbcX2134' })
  username: string;
}
