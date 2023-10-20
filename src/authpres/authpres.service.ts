import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Edit_Authpres_Dto } from './dto/edit_authpres_dto';
import { Cei_Drt_Det_Entity } from './entities/Cei_Drt_Det_Entity';
import { Cei_Rsc_Entity } from './entities/cei_rsc_entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Empleados } from './entities/empleado.entity';
import * as fs from 'fs';
const tls = require('tls');
@Injectable()
export class AuthpresService {

    constructor(
        @InjectRepository(Cei_Drt_Det_Entity) private ceiDrtEntityRepository: Repository<Cei_Drt_Det_Entity>,
        @InjectRepository(Cei_Rsc_Entity) private ceiRscEntityRepository: Repository<Cei_Rsc_Entity>,
        @InjectRepository(Empleados)  private  empRepository: Repository<Empleados>,
        private readonly mailerService: MailerService,        
        
    ) { }

   
async actualizaEstado(v_cia:string, v_ctc:string, v_ent:string, v_ani:number, v_req:number, v_est:string, 
    dto: Edit_Authpres_Dto) : Promise<Cei_Drt_Det_Entity[]> {
        const toUpdate = await this.consultaDatos(v_cia, v_ctc, v_ent, v_ani, v_req);
        //console.log(toUpdate);
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro', HttpStatus.FORBIDDEN);
        toUpdate.forEach(Cei_Drt => {
        //console.log(Cei_Drt);
         const modelToEdit = Object.assign(Cei_Drt, {drtValpre: v_est});
         this.ceiDrtEntityRepository.save(modelToEdit);
        });
               
        const analista = await this.findAnalista(v_cia, v_ctc, v_ent, v_ani, v_req);
        //console.log(analista);
        if (!analista) { 
            return;
        }
        else {
            const datosEmp = await this.findOneEmp(analista.rscCodempEla);
            if (!datosEmp) {
                return;
            }
            else {
                //datosEmp.correo ='fgenovez';
                const enviaCorreo = await this.sendMail(datosEmp.correo, datosEmp.nombre, v_req, v_ani, v_ent);}
        }    
         return toUpdate;  
   }

    async consultaDatos(v_cia: string, v_ctc: string, v_ent:string, v_ani:number, v_req:number) {
            const register = await this.ceiDrtEntityRepository
            .createQueryBuilder('drt')
               .where('drt.DRT_CODCIA = :cia',  { cia:  v_cia })  
            .andWhere('drt.DRT_CODCTC = :ctc',  { ctc:  v_ctc })  
            .andWhere('drt.DRT_CODENT = :ent',  { ent:  v_ent })  
            .andWhere('drt.DRT_ANIREQ = :ani',  { ani:  v_ani })  
            .andWhere('drt.DRT_CODREQ = :req',  { req:  v_req })  
            .getMany();      
            return register;
        }
    
    async findAnalista(v_cia: string, v_ctc: string, v_ent:string, v_ani:number, v_req:number) {
        try {
            const register = await this.ceiRscEntityRepository.findOne({
                rscCodcia: v_cia,
                rscCodctc: v_ctc,
                rscCodent: v_ent,
                rscReqAnio: v_ani,
                rscReqId: v_req
            });
            if (register !== null && register !== undefined) {
                return register;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async findOneEmp(codcel:string) {
        try {
            const register = await this.empRepository.findOne({ codcia: '001', codcel: codcel }).then();
            if (register !== null && register !== undefined) {
                return register;
            }           
        } catch (error) {
            console.log(error);  
        }

}
async sendMail(email:string, nombreEmpleado:string, v_req:number, v_ani:number, v_ent:string) {
    try {
        const asuntoCorreo = 'El Área de Presupuesto ha Aprobado el refuerzo presupuestario del requerimiento descrito en el asunto';
        const despedida = '¡Feliz día!';
        await this.mailerService
            .sendMail({
            to: email ? email + '@cel.gob.sv' : process.env.correoApoyo,
            //to: 'fredy.genovez.cel' ? 'fredy.genovez.cel' + '@gmail.com' : process.env.correoApoyo,
            from: 'SisCEI sistemas@cel.gob.sv',
            subject: 'Notificación sobre Solicitud de refuerzo presupuestario REQ: ' + v_req + '-' + v_ani + ', CODENTI: ' + v_ent + ' ✔',
            text: 'Bienvenido',
            template: 'encuesta',
            context: {
                nombreEmpleado: nombreEmpleado,
                asunto: asuntoCorreo,
                nombreEmpleadoSaludo: nombreEmpleado.toUpperCase(),
                despedida: despedida,
            },
        })
            .then(() => { console.log('Correo Enviado a: ',email, nombreEmpleado); })
            .catch((error) => { console.log(error); });        
    } catch (error) {
        console.log(error);
    }
    
}
};

