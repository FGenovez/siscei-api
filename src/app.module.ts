import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthpresModule } from './authpres/authpres.module';
import { Cei_Drt_Det_Entity } from './authpres/entities/cei_drt_det_entity';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule,UsersModule,AuthpresModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/OBELIX',
    port: 1521,
    username: 'WSISCEI',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [Cei_Drt_Det_Entity],
  }),],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }