import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthpresController } from './authpres.controller';
import { AuthpresService } from './authpres.service';
import { Cei_Drt_Det_Entity } from './entities/cei_drt_det_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cei_Drt_Det_Entity])],
  controllers: [AuthpresController],
  providers: [AuthpresService],
  exports: [AuthpresService]
})
export class AuthpresModule {}