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
exports.Create_Cei_Rtb_Dto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Create_Cei_Rtb_Dto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODCIA', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbCodcia", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_ANIO', type: Number, }),
    __metadata("design:type", Number)
], Create_Cei_Rtb_Dto.prototype, "rtbAnio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODENT', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbCodent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODIGO', type: Number, }),
    __metadata("design:type", Number)
], Create_Cei_Rtb_Dto.prototype, "rtbCodigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODEMP_EMI', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbCodempEmi", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_ESTADO', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbEstado", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_MONTO', type: Number, }),
    __metadata("design:type", Number)
], Create_Cei_Rtb_Dto.prototype, "rtbMonto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_COMENTARIO_EMI', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbComentarioEmi", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODENT_ENT', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbCodentEnt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_CODEMP_ENT', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbCodempEnt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'RTB_COMENTARIO_ENT', type: String, }),
    __metadata("design:type", String)
], Create_Cei_Rtb_Dto.prototype, "rtbComentarioEnt", void 0);
exports.Create_Cei_Rtb_Dto = Create_Cei_Rtb_Dto;
//# sourceMappingURL=create_cei_rtb_dto.js.map