import { Controller, Post, UseGuards } from '@nestjs/common';
import { McuService } from './mcu.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('mcu')
@ApiTags('mcu')
@ApiBearerAuth()
export class McuController {
  constructor(private readonly mcuService: McuService) {}

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  async uploadData() {
    const response = await this.mcuService.uploadData();

    return {
      data: response,
      message: 'User created successfully',
    };
  }
}
