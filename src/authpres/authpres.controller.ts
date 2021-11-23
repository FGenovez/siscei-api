import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthpresService } from './authpres.service';
import { Create_Authpres_Dto } from './dto/create_authpres_dto';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';


@ApiTags('authpres')
@Controller('authpres')
export class AuthpresController {

    constructor(private authpresService: AuthpresService) {
    }

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/)',
        description: 'OBTIENE TODOS LOS REGISTROS DEL CATALOGO DE USUARIOS A PARTIR DEL BODY',
    })
    @Get('/todos/')
    obtieneTodos_Usu() {
        return this.authpresService.buscaTodos_Usu();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_pk/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/by_pk/:cia/:ctc/:ent/:ani/:req/:aus/:eus/:sus')
    async obtiene_usuarios_por_llave(
        @Param('cia') v_cia: string,
        @Param('ctc') v_ctc: string,
        @Param('ent') v_ent: string,
        @Param('ani') v_ani: number,
        @Param('req') v_req: number,
        @Param('aus') v_aus: number,
        @Param('eus') v_eus: string,
        @Param('sus') v_sus: string                        
    ) {
        const data = await this.authpresService.busca_req_por_llave(v_cia, v_ctc, v_ent, v_ani, v_req, v_aus, v_eus, v_sus);
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO, // POR SER UN REGISTRO CONSULTADO POR LA LLAVE, NO SE DEVUELVE ENTRE CORCHETES
                return data;
            }
        //return data;}
    }

   //**************************//

    //------------ POST - Crea registro
    @ApiHeader({
        name: 'Controlador: @Post(/catalogo/)',
        description: 'Crea registro a partir del BODY',
    })
    @Post('/insertar/')
    async creaUsuario(@Body() datos: Create_Authpres_Dto) {
        const data = await this.authpresService.creaUsuario(datos);
        return { message: 'Registro creado', data };
    }

    //------------ PUT - Actualiza registro
    @ApiHeader({
        name: 'Controlador: @Put(/catalogo/:mjc_codcia/:mjc_coduni/:mjc_codigo/)',
        description: 'Actualiza registro, se define la llave en el URL y las modificaciones en el BODY',
    })
    @Put('/modificar/:cia/:ctc/:ent/:ani/:req/:aus/:eus/:sus')
    async modificaUsuario(
        @Param('cia') v_cia: string,
        @Param('ctc') v_ctc: string,
        @Param('ent') v_ent: string,
        @Param('ani') v_ani: number,
        @Param('req') v_req: number,
        @Param('aus') v_aus: number,
        @Param('eus') v_eus: string,
        @Param('sus') v_sus: string, 
        @Body() dto: Edit_Authpres_Dto) {
        //console.log('v_codcia_@Put: ', v_codcia);
        //console.log('v_coduni_@Put: ', v_coduni);
        //console.log('v_codigo_@Put: ', v_codigo);
        //console.log('dto_@Put: ', dto);
        const data = await this.authpresService.modificaUsuario(v_cia, v_ctc, v_ent, v_ani, v_req, v_aus, v_eus, v_sus, dto);
        //console.log('data_controller: ', register);
        return { message: 'Registro actualizado', data };
    }

    //------------ DELETE - Borra registro
    @ApiHeader({
        name: 'Controlador: @Delete(/usuarios/:usu_codcia/:usu_usuario)',
        description: 'Borra registro del CATALOGO a partir de llave en el URL',
    })
    @Delete('/eliminar/:cia/:ctc/:ent/:ani/:req/:aus/:eus/:sus')
    async EliminaUsuario(
        @Param('cia') v_cia: string,
        @Param('ctc') v_ctc: string,
        @Param('ent') v_ent: string,
        @Param('ani') v_ani: number,
        @Param('req') v_req: number,
        @Param('aus') v_aus: number,
        @Param('eus') v_eus: string,
        @Param('sus') v_sus: string 
    ) {
        const data = await this.authpresService.EliminaUsuario(v_cia, v_ctc, v_ent, v_ani, v_req, v_aus, v_eus, v_sus);
        return { message: 'Registro eliminado', data };
    }


    
}