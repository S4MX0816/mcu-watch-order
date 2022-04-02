import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { McuService } from './mcu.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SecretKeyDto } from './dto/secret-key.dto';

@Controller('mcu')
@ApiTags('mcu')
@ApiBearerAuth()
export class McuController {
  constructor(private readonly mcuService: McuService) {}

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  async uploadData(@Body() { secretKey }: SecretKeyDto) {
    const response = await this.mcuService.uploadData(secretKey);

    return {
      data: response,
      message: 'User created successfully',
    };
  }
}
