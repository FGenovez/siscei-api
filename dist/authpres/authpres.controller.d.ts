import { AuthpresService } from './authpres.service';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';
import { Edit_Cei_Rtb_Dto } from './dto/edit_cei_rtb_dto';
export declare class AuthpresController {
    private authpresService;
    constructor(authpresService: AuthpresService);
    modificaUsuario(v_cia: string, v_ctc: string, v_ent: string, v_ani: number, v_req: number, v_est: string, dto: Edit_Authpres_Dto): Promise<{
        message: string;
    }>;
    autsolpresbcu(v_cia: string, v_ani: number, v_ent: string, v_cod: number, v_est: string, dto: Edit_Cei_Rtb_Dto): Promise<string>;
}
