import { ApiProperty } from '@nestjs/swagger';

export class SecretKeyDto {
  @ApiProperty({
    example:
      'This secret has been kept for a thousand years and only developers know it',
  })
  secretKey: string;
}
