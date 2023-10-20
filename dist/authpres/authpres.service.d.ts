import { Repository } from 'typeorm';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';
import { Cei_Rsc_Entity } from './entities/cei_rsc_entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Empleados } from './entities/empleado.entity';
export declare class AuthpresService {
    private ceiDrtEntityRepository;
    private ceiRscEntityRepository;
    private empRepository;
    private readonly mailerService;
    constructor(ceiDrtEntityRepository: Repository<Cei_Drt_Det_Entity>, ceiRscEntityRepository: Repository<Cei_Rsc_Entity>, empRepository: Repository<Empleados>, mailerService: MailerService);
    actualizaEstado(v_cia: string, v_ctc: string, v_ent: string, v_ani: number, v_req: number, v_est: string, dto: Edit_Authpres_Dto): Promise<Cei_Drt_Det_Entity[]>;
    consultaDatos(v_cia: string, v_ctc: string, v_ent: string, v_ani: number, v_req: number): Promise<Cei_Drt_Det_Entity[]>;
    findAnalista(v_cia: string, v_ctc: string, v_ent: string, v_ani: number, v_req: number): Promise<Cei_Rsc_Entity>;
    findOneEmp(codcel: string): Promise<Empleados>;
    sendMail(email: string, nombreEmpleado: string, v_req: number, v_ani: number, v_ent: string): Promise<void>;
}
