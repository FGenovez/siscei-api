import { Module } from '@nestjs/common';
import { AuthpresService } from './authpres.service';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthpresController } from './authpres.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Cei_Drt_Det_Entity])],
  controllers: [ AuthpresController ],
  providers: [ AuthpresService ],
  exports: [ AuthpresService ]
})
export class AuthpresModule {}
