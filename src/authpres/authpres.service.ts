import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';
import { Cei_Rsc_Entity } from './entities/cei_rsc_entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Empleados } from './entities/empleado.entity';
import { MESSAGES } from '@nestjs/core/constants';

@Injectable()
export class AuthpresService {

    constructor(
        @InjectRepository(Cei_Drt_Det_Entity) private ceiDrtEntityRepository: Repository<Cei_Drt_Det_Entity>,
        @InjectRepository(Cei_Rsc_Entity) private ceiRscEntityRepository: Repository<Cei_Rsc_Entity>,
        @InjectRepository(Empleados)  private  empRepository: Repository<Empleados>,
        private readonly mailerService: MailerService,        
        
    ) { }

   
async actualizaEstado(v_cia, v_ctc, v_ent, v_ani, v_req, v_est, dto: Edit_Authpres_Dto) {
    try {
        const toUpdate = await this.consultaDatos(v_cia, v_ctc, v_ent, v_ani, v_req);
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro', HttpStatus.FORBIDDEN);
        toUpdate.forEach(Cei_Drt => {
            const modelToEdit = Object.assign(Cei_Drt, {drtValpre: v_est });
            this.ceiDrtEntityRepository.save(modelToEdit);
        });
            const analista = await this.findAnalista(v_cia, v_ctc, v_ent, v_ani, v_req);
            if (!analista) { 
                return [];
            }
            else {
                const datosEmp = await this.findOneEmp(analista.rscCodempEla);
                if (!datosEmp) {
                    return [];
                }
                else {const enviaCorreo = await this.sendMail(datosEmp.correo, datosEmp.nombre, v_req, v_ani, v_ent);}
            }        
        } catch (error) {
            console.log(error)
     }
   }

    async consultaDatos(v_cia, v_ctc, v_ent, v_ani, v_req) {
        try {
            const register = await this.ceiDrtEntityRepository
            .createQueryBuilder('drt')
            .where('drt.DRT_CODCIA = :cia',  { cia:  v_cia })  
            .andWhere('drt.DRT_CODCTC = :ctc',  { ctc:  v_ctc })  
            .andWhere('drt.DRT_CODENT = :ent',  { ent:  v_ent })  
            .andWhere('drt.DRT_ANIREQ = :ani',  { ani:  v_ani })  
            .andWhere('drt.DRT_CODREQ = :req',  { req:  v_req })  
            .getMany();      
            if (register !== null && register !== undefined) {return register;}             
        } catch (error) {
            console.log(error);
        }

}
    
    async findAnalista(cia, ctc, ent, ani, req) {
        try {
            const register = await this.ceiRscEntityRepository.findOne({
                rscCodcia: cia,
                rscCodctc: ctc,
                rscCodent: ent,
                rscReqAnio: ani,
                rscReqId: req
            });
            if (register !== null && register !== undefined) {return register;}
        } catch (error) {
            console.log(error);
        }

    }
    async findOneEmp(codcel) {
        try {
            const register = await this.empRepository.findOne({ codcia: '001', codcel: codcel }).then();
            if (register !== null && register !== undefined) {
                return register;
            }           
        } catch (error) {
            console.log(error);  
        }

}
async sendMail(email, nombreEmpleado, req, ani, ent) {
    try {
        const asuntoCorreo = 'El Área de Presupuesto ha Aprobado el refuerzo presupuestario del requerimiento descrito en el asunto';
        const despedida = '¡Feliz día!';
        await this.mailerService
            .sendMail({
            to: email ? email + '@cel.gob.sv' : process.env.correoApoyo,
            from: 'SisCEI@cel.gob.sv',
            subject: 'Notificación sobre Solicitud de refuerzo presupuestario REQ: ' + req + '-' + ani + ', CODENTI: ' + ent + ' ✔',
            text: 'Bienvenido',
            template: 'encuesta',
            context: {
                nombreEmpleado: nombreEmpleado,
                asunto: asuntoCorreo,
                nombreEmpleadoSaludo: nombreEmpleado.toUpperCase(),
                despedida: despedida
            },
        })
            .then(() => { console.log('Correo Enviado a: ',email, nombreEmpleado); })
            .catch((error) => { console.log(error); });        
    } catch (error) {
        console.log(error);
    }
    
}
};

