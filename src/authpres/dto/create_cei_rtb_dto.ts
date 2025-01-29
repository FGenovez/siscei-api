import { ApiProperty } from "@nestjs/swagger";
import {  IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Cei_Rtb_Dto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'RTB_CODCIA', type: String, })
    rtbCodcia: string;
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'RTB_ANIO', type: Number, })
    rtbAnio: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'RTB_CODENT', type: String, })
    rtbCodent: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'RTB_CODIGO', type: Number, })
    rtbCodigo: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'RTB_CODEMP_EMI', type: String, })
    rtbCodempEmi: string;

    @IsString()    
    @IsOptional()
    @ApiProperty({ description: 'RTB_ESTADO', type: String, })
    rtbEstado: string;    

    @IsNumber()    
    @IsOptional()
    @ApiProperty({ description: 'RTB_MONTO', type: Number, })
    rtbMonto: number; 

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'RTB_COMENTARIO_EMI', type: String, })
    rtbComentarioEmi: string;


    @IsString()    
    @IsOptional()
    @ApiProperty({ description: 'RTB_CODENT_ENT', type: String, })
    rtbCodentEnt: string;     


    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'RTB_CODEMP_ENT', type: String, })
    rtbCodempEnt: string;    

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'RTB_COMENTARIO_ENT', type: String, })
    rtbComentarioEnt: string;     
}