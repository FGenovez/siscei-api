import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthpresModule } from './authpres/authpress.module';
import { Cei_Drt_Det_Entity } from './authpres/entities/Cei_Drt_Det_Entity';
import { Empleados } from './authpres/entities/empleado.entity';
import { Unidades } from './authpres/entities/unidad.entity';
import { Cei_Rsc_Entity } from './authpres/entities/cei_rsc_entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthpresModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),    
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/obelix',
    port: 1521,
    username: 'WSISCEI',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [Cei_Drt_Det_Entity, Empleados, Unidades, Cei_Rsc_Entity],
  }),
  MailerModule.forRootAsync({
    useFactory: () => ({
      transport: {
        host: process.env.HOST_MAIL,
        port: parseInt(process.env.PORT_MAIL),
        secure: Boolean(JSON.parse(process.env.SECURE_MAIL)),
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      files: [
        {
          filename:     'image.jpg',          
          contentType:  'image/jpeg',
          cid:          'myimagecid'
        }
      ],
      //Aqui se indica la ruta de la plantilla. FGenovez - 07/01/2022
      template: {
        dir: process.cwd() ,// + '/templates/', // __dirname + '/templates', //dir: process.cwd() + 'src/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  }),
  AuthpresModule
],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {
  
}