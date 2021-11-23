import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthpresService } from './authpres.service';

@ApiTags('Authpres')
@Controller('authpres')
export class AuthpresController {
    constructor(private authpresService: AuthpresService) {
    }


    //------------ GET - OBTIENE TODOS LOS REGISTROS DE LAS PRECIPITACIONES A PARTIR DEL BODY
    @ApiHeader({
        name: 'Controlador: @Get()',
        description: 'GET DE TODOS LOS REGISTROS A PARTIR DEL BODY',
    })
    @Get()
    findAllAuthpres() {
        return this.authpresService.findAllAuthpres();
    }


}
