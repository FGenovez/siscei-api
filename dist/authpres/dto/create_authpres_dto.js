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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create_Authpres_Dto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Create_Authpres_Dto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'CODIGO DE LA COMPAÑIA', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtCodcia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'CENTRO DE COSTO', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtCodctc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'CODENTI', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtCodent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'AÑO REQUERIMIENTO', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtAnireq", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'NÚMERO DE REQUERIMIENTO', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtCodreq", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'AÑO DE USO DEL PRESUPUESTO', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtAniuso", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'DEPENDENCIA QUE HACE USO', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtEntuso", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'ESPECÍFICO DE EGRESO', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtEspuso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'MONTO DE PARTICIPACIÓN', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtPorcen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'MONTO POR REQ, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtMonreq", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtDisreq", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'MONTO POR RSC, ANIO, ESPECÍFICO Y ENTIDAD', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtMonrsc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'DISPONIBILIDAD DE LA ENTIDAD', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtDisrsc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'AUTORIZA PRESUPUESTO SI LO DESCRITO EN REQ ES MAYOR A RSC', type: String, }),
    __metadata("design:type", String)
], Create_Authpres_Dto.prototype, "drtValpre", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'DETALLE DE REQUERIMIENTO', type: Number, }),
    __metadata("design:type", Number)
], Create_Authpres_Dto.prototype, "drtCoddre", void 0);
exports.Create_Authpres_Dto = Create_Authpres_Dto;
//# sourceMappingURL=create_authpres_dto.js.map