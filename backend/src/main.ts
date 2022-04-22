import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ENVIRONMENT } from './helpers/configs/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('MCU watch order')
    .setDescription('MCU watch order API descriptions')
    .addBearerAuth({ in: 'header', type: 'http' })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(ENVIRONMENT.PORT || 8080);
}
bootstrap();
