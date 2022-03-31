import { Controller, Post } from '@nestjs/common';
import { McuService } from './mcu.service';

@Controller('mcu')
export class McuController {
  constructor(private readonly mcuService: McuService) {}

  @Post('')
  async uploadData() {
    const response = await this.mcuService.uploadData();

    return {
      data: response,
      message: 'User created successfully',
    };
  }
}
