import { Body, Controller,  Get,  Param } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthpresService } from './authpres.service';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';

@ApiTags('authpres')
@Controller('authpres')
export class AuthpresController {
    constructor(private authpresService: AuthpresService) {}
  
    @ApiHeader({
        name: 'Controlador: @Get(/actualizar/:cia/:ctc/:ent/:ani/:req/:est)'||
             '- Proceso que es ejecutado desde SisCEI.Cei_Su_Informa_compram_Pr. Debe ser un @GEt',
        description: 'Actualiza registro',
    })
    @Get('/actualizar/:cia/:ctc/:ent/:ani/:req/:est')
    async modificaUsuario(
        @Param('cia') v_cia: string,
        @Param('ctc') v_ctc: string,
        @Param('ent') v_ent: string,
        @Param('ani') v_ani: number,
        @Param('req') v_req: number,
        @Param('est') v_est: string, 
        @Body() dto: Edit_Authpres_Dto) {
         const data = await this.authpresService.actualizaEstado(v_cia, v_ctc, v_ent, v_ani, v_req,  v_est, dto);
        return { message: 'La disponibilidad Presupuestaria : '+ v_req +' / '+ v_ani +' - Codenti: '+ v_ent +' ha sido actualizada'};
    }
}