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
exports.AuthpresController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authpres_service_1 = require("./authpres.service");
const edit_authpres_dto_1 = require("./dto/edit_authpres_dto");
const edit_cei_rtb_dto_1 = require("./dto/edit_cei_rtb_dto");
let AuthpresController = class AuthpresController {
    constructor(authpresService) {
        this.authpresService = authpresService;
    }
    async modificaUsuario(v_cia, v_ctc, v_ent, v_ani, v_req, v_est, dto) {
        const data = await this.authpresService.actualizaEstado(v_cia, v_ctc, v_ent, v_ani, v_req, v_est, dto);
        return { message: 'La disponibilidad Presupuestaria : ' + v_req + ' / ' + v_ani + ' - Codenti: ' + v_ent + ' ha sido actualizada' };
    }
    async autsolpresbcu(v_cia, v_ani, v_ent, v_cod, v_est, dto) {
        const data = await this.authpresService.autsolpresbcu(v_cia, v_ani, v_ent, v_cod, v_est, dto);
        const message = `La solicitud: ${v_cod} / ${v_ani} - Codenti: ${v_ent} ha sido procesada`;
        return (JSON.stringify(message));
    }
};
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'Controlador: @Get(/actualizar/:cia/:ctc/:ent/:ani/:req/:est)' ||
            '- Proceso que es ejecutado desde SisCEI.Cei_Su_Informa_compram_Pr. Debe ser un @GEt',
        description: 'Actualiza registro',
    }),
    (0, common_1.Get)('/actualizar/:cia/:ctc/:ent/:ani/:req/:est'),
    __param(0, (0, common_1.Param)('cia')),
    __param(1, (0, common_1.Param)('ctc')),
    __param(2, (0, common_1.Param)('ent')),
    __param(3, (0, common_1.Param)('ani')),
    __param(4, (0, common_1.Param)('req')),
    __param(5, (0, common_1.Param)('est')),
    __param(6, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number, String, edit_authpres_dto_1.Edit_Authpres_Dto]),
    __metadata("design:returntype", Promise)
], AuthpresController.prototype, "modificaUsuario", null);
__decorate([
    (0, common_1.Get)('/autsolpresbcu/:cia/:ani/:ent/:cod/:est'),
    __param(0, (0, common_1.Param)('cia')),
    __param(1, (0, common_1.Param)('ani')),
    __param(2, (0, common_1.Param)('ent')),
    __param(3, (0, common_1.Param)('cod')),
    __param(4, (0, common_1.Param)('est')),
    __param(5, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number, String, edit_cei_rtb_dto_1.Edit_Cei_Rtb_Dto]),
    __metadata("design:returntype", Promise)
], AuthpresController.prototype, "autsolpresbcu", null);
AuthpresController = __decorate([
    (0, swagger_1.ApiTags)('authpres'),
    (0, common_1.Controller)('authpres'),
    __metadata("design:paramtypes", [authpres_service_1.AuthpresService])
], AuthpresController);
exports.AuthpresController = AuthpresController;
//# sourceMappingURL=authpres.controller.js.map