import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { McuModule } from './mcu/mcu.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://s4mx0816:SanyamT0816@cluster0.1rns6.mongodb.net/mcu-watch-order?authSource=admin&replicaSet=atlas-v48ndu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    ),
    AuthModule,
    McuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
