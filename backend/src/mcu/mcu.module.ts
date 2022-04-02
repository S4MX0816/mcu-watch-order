import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordService } from 'src/helpers/password.service';
import { McuController } from './mcu.controller';
import { McuSchema } from './mcu.model';
import { McuService } from './mcu.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'mcu', schema: McuSchema }])],
  controllers: [McuController],
  providers: [McuService, PasswordService],
})
export class McuModule {}
