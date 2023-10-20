import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Authpres_Dto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPAÑIA', type: String, })
    drtCodcia: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CENTRO DE COSTO', type: String, })
    drtCodctc: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODENTI', type: String, })
    drtCodent: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO REQUERIMIENTO', type: Number, })
    drtAnireq: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'NÚMERO DE REQUERIMIENTO', type: Number, })
    drtCodreq: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DE USO DEL PRESUPUESTO', type: Number, })
    drtAniuso: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DEPENDENCIA QUE HACE USO', type: String, })
    drtEntuso: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESPECÍFICO DE EGRESO', type: String, })
    drtEspuso: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO DE PARTICIPACIÓN', type: Number, })
    drtPorcen: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO POR REQ, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, })
    drtMonreq: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, })
    drtDisreq: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO POR RSC, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, })
    drtMonrsc: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, })
    drtDisrsc: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'AUTORIZA PRESUPUESTO SI LO DESCRITO EN REQ ES MAYOR A RSC', type: String, })
    drtValpre: string;
        
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'DETALLE DE REQUERIMIENTO', type: Number, })
    drtCoddre: number;    
}