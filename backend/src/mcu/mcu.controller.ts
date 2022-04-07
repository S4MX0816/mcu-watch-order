import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { McuService } from './mcu.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SecretKeyDto } from './dto/secret-key.dto';
import { FilterMcuDto } from './dto/filter-mcu.dto';

@Controller('mcu')
@ApiTags('mcu')
@ApiBearerAuth()
export class McuController {
  constructor(private readonly mcuService: McuService) {}

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary:
      'This api will format and upload the data to the db and requires a special authentication key',
  })
  async uploadData(@Body() { secretKey }: SecretKeyDto) {
    const response = await this.mcuService.uploadData(secretKey);

    return {
      data: response,
      message: 'User created successfully',
    };
  }

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: 'This api will get all the data sorted by released date',
  })
  async getAllData(@Query() filterMcuDto: FilterMcuDto) {
    const response = await this.mcuService.getData(filterMcuDto);

    return {
      data: response,
      message: 'Data fetched successfully',
    };
  }
}
