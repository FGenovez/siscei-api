import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthpresController } from './authpres.controller';
import { AuthpresService } from './authpres.service';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';
import { Cei_Rsc_Entity } from './entities/cei_rsc_entity';
import { Empleados } from './entities/empleado.entity';
import { Unidades } from './entities/unidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cei_Drt_Det_Entity, Cei_Rsc_Entity, Empleados, Unidades])],
  controllers: [AuthpresController],
  providers: [AuthpresService]
})
export class AuthpresModule {}