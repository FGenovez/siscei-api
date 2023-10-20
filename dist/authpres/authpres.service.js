"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthpresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Cei_Drt_Det_Entity_1 = require("./entities/Cei_Drt_Det_Entity");
const cei_rsc_entity_1 = require("./entities/cei_rsc_entity");
const mailer_1 = require("@nestjs-modules/mailer");
const empleado_entity_1 = require("./entities/empleado.entity");
const tls = require('tls');
let AuthpresService = class AuthpresService {
    constructor(ceiDrtEntityRepository, ceiRscEntityRepository, empRepository, mailerService) {
        this.ceiDrtEntityRepository = ceiDrtEntityRepository;
        this.ceiRscEntityRepository = ceiRscEntityRepository;
        this.empRepository = empRepository;
        this.mailerService = mailerService;
    }
    async actualizaEstado(v_cia, v_ctc, v_ent, v_ani, v_req, v_est, dto) {
        const toUpdate = await this.consultaDatos(v_cia, v_ctc, v_ent, v_ani, v_req);
        if (!toUpdate)
            throw new common_1.HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro', common_1.HttpStatus.FORBIDDEN);
        toUpdate.forEach(Cei_Drt => {
            const modelToEdit = Object.assign(Cei_Drt, { drtValpre: v_est });
            this.ceiDrtEntityRepository.save(modelToEdit);
        });
        const analista = await this.findAnalista(v_cia, v_ctc, v_ent, v_ani, v_req);
        if (!analista) {
            return;
        }
        else {
            const datosEmp = await this.findOneEmp(analista.rscCodempEla);
            if (!datosEmp) {
                return;
            }
            else {
                const enviaCorreo = await this.sendMail(datosEmp.correo, datosEmp.nombre, v_req, v_ani, v_ent);
            }
        }
        return toUpdate;
    }
    async consultaDatos(v_cia, v_ctc, v_ent, v_ani, v_req) {
        const register = await this.ceiDrtEntityRepository
            .createQueryBuilder('drt')
            .where('drt.DRT_CODCIA = :cia', { cia: v_cia })
            .andWhere('drt.DRT_CODCTC = :ctc', { ctc: v_ctc })
            .andWhere('drt.DRT_CODENT = :ent', { ent: v_ent })
            .andWhere('drt.DRT_ANIREQ = :ani', { ani: v_ani })
            .andWhere('drt.DRT_CODREQ = :req', { req: v_req })
            .getMany();
        return register;
    }
    async findAnalista(v_cia, v_ctc, v_ent, v_ani, v_req) {
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
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOneEmp(codcel) {
        try {
            const register = await this.empRepository.findOne({ codcia: '001', codcel: codcel }).then();
            if (register !== null && register !== undefined) {
                return register;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendMail(email, nombreEmpleado, v_req, v_ani, v_ent) {
        try {
            const asuntoCorreo = 'El Área de Presupuesto ha Aprobado el refuerzo presupuestario del requerimiento descrito en el asunto';
            const despedida = '¡Feliz día!';
            await this.mailerService
                .sendMail({
                to: email ? email + '@cel.gob.sv' : process.env.correoApoyo,
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
                .then(() => { console.log('Correo Enviado a: ', email, nombreEmpleado); })
                .catch((error) => { console.log(error); });
        }
        catch (error) {
            console.log(error);
        }
    }
};
AuthpresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Cei_Drt_Det_Entity_1.Cei_Drt_Det_Entity)),
    __param(1, (0, typeorm_1.InjectRepository)(cei_rsc_entity_1.Cei_Rsc_Entity)),
    __param(2, (0, typeorm_1.InjectRepository)(empleado_entity_1.Empleados)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], AuthpresService);
exports.AuthpresService = AuthpresService;
;
//# sourceMappingURL=authpres.service.js.map