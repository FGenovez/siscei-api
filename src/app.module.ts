import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthpresController } from './authpres/authpres.controller';
import { AuthpresModule } from './authpres/authpres.module';
import { AuthpresService } from './authpres/authpres.service';
import { Cei_Drt_Det_Entity } from "./authpres/entities/Cei_Drt_Det_Entity";


@Module({
  imports: [AuthpresModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: 'desa.cel.gob.sv:1521/DESA',
    port: 1521,
    username: 'WSISCEI',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [Cei_Drt_Det_Entity],
  }),
    AuthpresModule,],
  controllers: [AuthpresController],
  providers: [AuthpresService],
})


export class AppModule { }