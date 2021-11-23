import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Create_Authpres_Dto } from './dto/create_authpres_dto';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';
import { Cei_Drt_Det_Entity } from './entities/cei_drt_det_entity';


@Injectable()
export class AuthpresService {

    constructor(
        @InjectRepository(Cei_Drt_Det_Entity) private authpresRepository: Repository<Cei_Drt_Det_Entity>,
        
    ) { }

    @ApiHeader({
        name: 'Servicio: buscaTodos_Usu(): Promise<Pri_Usu_Usuarios_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async buscaTodos_Usu(): Promise<Cei_Drt_Det_Entity[]> {
        //************************************************************************************************************************************************ */        
        const register = await this.authpresRepository.find(
            {
                //where: { usuCodcia: "001", usuCodcel: "7309011" },
                order: {
                    drtCodcia: 'ASC',
                    drtCodctc: 'ASC',
                    drtCodent: 'ASC'
                }
            }
        );
        /*
        if (!register)
            throw new NotFoundException('No se ha encontrado ningún registro (buscaTodos_Usu)');
        else
            return register;
        */
        return register;
    }


    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async busca_req_por_llave(v_cia :string, v_ctc :string, v_ent :string, v_ani: number, v_req: number, v_aus: number, v_eus :string, v_sus :string): Promise<Cei_Drt_Det_Entity> {
        const register = await this.authpresRepository.findOne(
            {
                drtCodcia: v_cia,
                drtCodctc: v_ctc,
                drtCodent: v_ent,
                drtAnireq: v_ani,
                drtCodreq: v_req,
                drtAniuso: v_aus,
                drtEntuso: v_eus,
                drtEspuso: v_sus
            }
        );
        /*
        if (!register)
            throw new HttpException('No existen registros para los parametros definidos en la consulta - (busca_usuarios_por_llave)', HttpStatus.FORBIDDEN);
        else
            return register;
        */
        return register;
    }

    //-------------------------------------------------------------------------------------------------------------

 //------------ CREA REGISTRO
 @ApiHeader({
    name: 'Servicio: createCat(dto: Create_Mjucat_Dto): Promise<Mch_Mjc_Cat>',
    description: 'CREA UN REGISTRO DEL CATALOGO A PARTIR DE CAMPOS DE LA LLAVE PRIMARIA',
})
async creaUsuario(dto: Create_Authpres_Dto)//: Promise<Pri_Usu_Usuarios_Entity> 
{
    const register = await this.authpresRepository.findOne({
        drtCodcia: dto.drtCodcia,
        drtCodctc: dto.drtCodctc,
        drtCodent: dto.drtCodent,
        drtAnireq: dto.drtAnireq,
        drtCodreq: dto.drtCodreq,
        drtAniuso: dto.drtAniuso,
        drtEntuso: dto.drtEntuso,
        drtEspuso: dto.drtEspuso
    });
    if (register)
        throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaUsuario)', HttpStatus.FORBIDDEN);
    else {
        const model = this.authpresRepository.create(dto);
        const newRegister = await this.authpresRepository.save(model);
        return newRegister;
    }
}

//------------ ACTUALIZA UN REGISTRO
@ApiHeader({
    name: 'Servicio: modificaUsuario(v_Codcia: string, v_Usuario: string, dto: Edit_Pri_Usu_Dto): Promise<Pri_Usu_Usuarios_Entity>',
    description: 'ACTUALIZA UN REGISTRO',
})
async modificaUsuario(v_cia :string, v_ctc :string, v_ent :string, v_ani: number, v_req: number, v_aus: number, v_eus :string, v_sus :string, dto: Edit_Authpres_Dto): Promise<Cei_Drt_Det_Entity> {
    //console.log('mjcCodcia_editCat: ', mjcCodcia);
    //console.log('mjcCoduni_editCat: ', mjcCoduni);
    //console.log('mjcCodigo_editCat: ', mjcCodigo);
    //console.log('dto_editCat: ', dto);        
    const toUpdate = await this.busca_req_por_llave(v_cia, v_ctc, v_ent, v_ani, v_req, v_aus, v_eus, v_sus);
    //console.log('Continua');
    //console.log('toUpdate_editCat: ', toUpdate);
    if (!toUpdate)
        throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (modificaUsuario)', HttpStatus.FORBIDDEN);
    const modelToEdit = Object.assign(toUpdate, dto);
    return await this.authpresRepository.save(modelToEdit);
    //return toUpdate;
}

//------------ ELIMINA UN REGISTRO
@ApiHeader({
    name: 'Servicio: deleteByKeyCat(vs_mjc_Codcia: string, vs_mjc_Coduni: number, vs_mjc_Codigo: string)',
    description: 'ELIMINA UN REGISTRO DEL CATALOGO UTILIZANDO LOS CAMPOS DE LA LLAVE PRIMARIA VIA URL',
})
async EliminaUsuario(v_cia :string, v_ctc :string, v_ent :string, v_ani: number, v_req: number, v_aus: number, v_eus :string, v_sus :string){
    const register = await this.authpresRepository.findOne({
        drtCodcia: v_cia,
        drtCodctc: v_ctc,
        drtCodent: v_ent,
        drtAnireq: v_ani,
        drtCodreq: v_req,
        drtAniuso: v_aus,
        drtEntuso: v_eus,
        drtEspuso: v_sus
    });
    if (register) {
        const toDelete = this.authpresRepository.create(register);
        this.authpresRepository.remove(toDelete);
    }
    else {
        throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (EliminaUsuario)', HttpStatus.FORBIDDEN);
    }
}



}