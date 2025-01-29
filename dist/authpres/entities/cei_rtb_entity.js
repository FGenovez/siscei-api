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
exports.Cei_Rtb_Entity = void 0;
const typeorm_1 = require("typeorm");
let Cei_Rtb_Entity = class Cei_Rtb_Entity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "RTB_CODCIA", length: 3 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbCodcia", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { primary: true, name: "RTB_ANIO", precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], Cei_Rtb_Entity.prototype, "rtbAnio", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "RTB_CODENT", length: 3 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbCodent", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { primary: true, name: "RTB_CODIGO", precision: 5, scale: 0 }),
    __metadata("design:type", Number)
], Cei_Rtb_Entity.prototype, "rtbCodigo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_CODEMP_EMI", length: 8 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbCodempEmi", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_ESTADO", length: 3 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbEstado", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "RTB_MONTO", precision: 16, scale: 6 }),
    __metadata("design:type", Number)
], Cei_Rtb_Entity.prototype, "rtbMonto", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_COMENTARIO_EMI", length: 4000 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbComentarioEmi", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_CODENT_ENT", length: 3 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbCodentEnt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_CODEMP_ENT", length: 8 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbCodempEnt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "RTB_COMENTARIO_ENT", length: 4000 }),
    __metadata("design:type", String)
], Cei_Rtb_Entity.prototype, "rtbComentarioEnt", void 0);
Cei_Rtb_Entity = __decorate([
    (0, typeorm_1.Index)("SIS_RTB_PK", ["rtbCodcia", "rtbAnio", "rtbCodent", "rtbCodigo"], { unique: true }),
    (0, typeorm_1.Entity)("CEI_RTB_REGTRABCU")
], Cei_Rtb_Entity);
exports.Cei_Rtb_Entity = Cei_Rtb_Entity;
//# sourceMappingURL=cei_rtb_entity.js.map