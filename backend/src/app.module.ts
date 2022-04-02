import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ENVIRONMENT } from './configs/environment';
import { McuModule } from './mcu/mcu.module';

@Module({
  imports: [
    MongooseModule.forRoot(ENVIRONMENT.MONGO_DB_CONNECTION),
    AuthModule,
    McuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
