/* eslint-disable prettier/prettier */
import { Column, Entity,  PrimaryColumn } from 'typeorm';

@Entity('CEI_RSC_REQUISICIONES')
export class Cei_Rsc_Entity {
  @PrimaryColumn("varchar2",{ name: 'RSC_CODCIA', length: 3 })
  rscCodcia: string;
  @PrimaryColumn("varchar2",{ name: 'RSC_CODCTC' , length: 2})
  rscCodctc: string;
  @PrimaryColumn("varchar2",{ name: 'RSC_CODENT',  length: 3 })
  rscCodent: string;
  @PrimaryColumn("number",{ name: 'RSC_REQ_ANIO',  precision: 4, scale: 0, })
  rscReqAnio: number;
  @PrimaryColumn("number",{ name: 'RSC_REQ_ID', precision: 14, scale: 0, })
  rscReqId: number;
  @PrimaryColumn("number",{ name: 'RSC_ID', precision: 10, scale: 0, })
  rscId: number;
  @Column("varchar2",{ name: 'RSC_CODEMP_ELA',  length: 7 })
  rscCodempEla: string;


}