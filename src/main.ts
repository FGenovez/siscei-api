import { initSwagger } from './app.swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

//Para producción
/*
const crPath = '/opt/nodejscert/server.cert';
const pkPath = '/opt/nodejscert/server.key';
*/
//Para pruebas locales

const crPath = 'server.cert';
const pkPath = 'server.key';


/*
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
*/

let httpsOptions: any = {};

async function bootstrap() {
  if (fs.existsSync(crPath) && fs.existsSync(pkPath)) {
    httpsOptions = {
      cert: fs.readFileSync(crPath),
      key: fs.readFileSync(pkPath)
    }
  }
  const app = await NestFactory.create(AppModule, { httpsOptions });
  
  initSwagger(app);

  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  
  app.enableCors();
  await app.listen(3012);
  console.log(`La aplicación esta corriendo en: ${await app.getUrl()}`);
}
bootstrap();
