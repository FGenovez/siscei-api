import { initSwagger } from './app.swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }),
  );
 
  app.enableCors();
  await app.listen(3012);
  console.log(`La aplicación esta corriendo en: ${await app.getUrl()}`);
}
bootstrap();
