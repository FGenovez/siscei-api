import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
@Index("SIS_RTB_PK", ["rtbCodcia","rtbAnio","rtbCodent","rtbCodigo"], { unique: true })
@Entity("CEI_RTB_REGTRABCU")


export class Cei_Rtb_Entity {
  @PrimaryColumn()
  @Column("varchar2", { primary: true, name: "RTB_CODCIA" , length: 3 })
  rtbCodcia?: string;

  @PrimaryColumn()
  @Column("number", { primary: true, name: "RTB_ANIO" , precision: 4, scale: 0 })
  rtbAnio?: number;

  @PrimaryColumn()
  @Column("varchar2", { primary: true, name: "RTB_CODENT" , length: 3 })
  rtbCodent?: string;

  @PrimaryColumn()
  @Column("number", { primary: true, name: "RTB_CODIGO" , precision: 5, scale: 0 })
  rtbCodigo?: number;

  //  
  @Column("varchar2", {name: "RTB_CODEMP_EMI" , length: 8 })
  rtbCodempEmi?: string;

  @Column("varchar2", {name: "RTB_ESTADO" , length: 3 })
  rtbEstado?: string;
  
  @Column("number", {name: "RTB_MONTO" , precision: 16, scale: 6 })
  rtbMonto?: number;

  @Column("varchar2", {name: "RTB_COMENTARIO_EMI" , length: 4000 })
  rtbComentarioEmi?: string;  

  @Column("varchar2", {name: "RTB_CODENT_ENT" , length: 3 })
  rtbCodentEnt?: string;  

  @Column("varchar2", {name: "RTB_CODEMP_ENT" , length: 8 })
  rtbCodempEnt?: string;  

  @Column("varchar2", {name: "RTB_COMENTARIO_ENT" , length: 4000 })
  rtbComentarioEnt?: string;  


}