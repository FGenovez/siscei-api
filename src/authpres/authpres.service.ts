import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntitySchema, Repository } from 'typeorm';
import { ApiHeader } from '@nestjs/swagger';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';


@Injectable()
export class AuthpresService {
    constructor( @InjectRepository(Cei_Drt_Det_Entity) private authPresRepository: Repository<Cei_Drt_Det_Entity>
    ) { }

    //------------ BUSCA TODOS LOS REGISTROS DE PRECIPITACIONES
    @ApiHeader({
        name: 'Servicio: findAllPre(): Promise<Cei_Drt_Det_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DE PRECIPITACIONES',
    })
    async findAllAuthpres(): Promise<Cei_Drt_Det_Entity[]> {
        const register = await this.authPresRepository.find(
            {
            order: {
                drtCodcia: 'ASC',
                drtCodctc: 'ASC',
                drtCodent: 'ASC'
            }
        }
        );
        /*{
        if (!register)
            throw new NotFoundException('No se ha encontrado ningún registro');
        else 
            const register: Edit_Precip_Dto[] = [];
            for (let item_lista of register_lista) {
                register.push(await this.to_DTO_precipitacion(item_lista));
            }
            return register;
        }*/
        return register;
    }
}
