import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Authpres_Dto {
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODIGO DE LA COMPAÑIA', type: String, })
    drtCodcia: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'CENTRO DE COSTO', type: String, })
    drtCodctc: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODENTI', type: String, })
    drtCodent: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'AÑO REQUERIMIENTO', type: Number, })
    drtAnireq: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'NÚMERO DE REQUERIMIENTO', type: Number, })
    drtCodreq: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'AÑO DE USO DEL PRESUPUESTO', type: Number, })
    drtAniuso: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'DEPENDENCIA QUE HACE USO', type: String, })
    drtEntuso: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'ESPECÍFICO DE EGRESO', type: String, })
    drtEspuso: string;

    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO DE PARTICIPACIÓN', type: Number, })
    drtPorcen: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO POR REQ, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, })
    drtMonreq: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, })
    drtDisreq: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'MONTO POR RSC, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, })
    drtMonrsc: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, })
    drtDisrsc: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'AUTORIZA PRESUPUESTO SI LO DESCRITO EN REQ ES MAYOR A RSC', type: String, })
    drtValpre: string;
        
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'DETALLE DE REQUERIMIENTO', type: Number, })
    drtCoddre: number;    
}