import { Column, Entity, PrimaryColumn } from "typeorm";

/*@Index("<CEI_DRT_PK>", ["drtCodcia", "drtCodctc", "drtCodent", "drtAnireq", "drtCodreq", "drtAniuso", "drtEntuso", "drtEspuso"], { unique: true })*/

@Entity("CEI_DRT_DET_RES_TEMPORAL")


export class Cei_Drt_Det_Entity {


    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "DRT_CODCIA", length: 3 })
    drtCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "DRT_CODCTC", length: 2 })
    drtCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "DRT_CODENT", length: 3 })
    drtCodent?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "DRT_ANIREQ", precision: 4, scale: 0, })
    drtAnireq?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "DRT_CODREQ", precision: 14, scale: 0, })
    drtCodreq?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "DRT_ANIUSO", precision: 4, scale: 0, })
    drtAniuso?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "DRT_ENTUSO", length: 3 })
    drtEntuso?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "DRT_ESPUSO", length: 5 })
    drtEspuso?: string;
    //-----------------------------------------------------------------------------------------    
    @Column("number", { name: "DRT_PORCEN", precision: 5, scale: 2, })
    drtPorcen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "DRT_MONREQ", precision: 16, scale: 2, })
    drtMonreq?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "DRT_DISREQ", precision: 16, scale: 2, })
    drtDisreq?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "DRT_MONRSC", precision: 16, scale: 0, })
    drtMonrsc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "DRT_DISRSC", precision: 16, scale: 2, })
    drtDisrsc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "DRT_VALPRE", length: 1 })
    drtValpre?: string;
}
