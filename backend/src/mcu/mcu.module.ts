import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { McuController } from './mcu.controller';
import { McuSchema } from './mcu.model';
import { McuService } from './mcu.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'mcu', schema: McuSchema }])],
  controllers: [McuController],
  providers: [McuService],
})
export class McuModule {}
