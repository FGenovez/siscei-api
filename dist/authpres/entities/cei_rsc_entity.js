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
exports.Cei_Rsc_Entity = void 0;
const typeorm_1 = require("typeorm");
let Cei_Rsc_Entity = class Cei_Rsc_Entity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("varchar2", { name: 'RSC_CODCIA', length: 3 }),
    __metadata("design:type", String)
], Cei_Rsc_Entity.prototype, "rscCodcia", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("varchar2", { name: 'RSC_CODCTC', length: 2 }),
    __metadata("design:type", String)
], Cei_Rsc_Entity.prototype, "rscCodctc", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("varchar2", { name: 'RSC_CODENT', length: 3 }),
    __metadata("design:type", String)
], Cei_Rsc_Entity.prototype, "rscCodent", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("number", { name: 'RSC_REQ_ANIO', precision: 4, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Rsc_Entity.prototype, "rscReqAnio", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("number", { name: 'RSC_REQ_ID', precision: 14, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Rsc_Entity.prototype, "rscReqId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("number", { name: 'RSC_ID', precision: 10, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Rsc_Entity.prototype, "rscId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: 'RSC_CODEMP_ELA', length: 7 }),
    __metadata("design:type", String)
], Cei_Rsc_Entity.prototype, "rscCodempEla", void 0);
Cei_Rsc_Entity = __decorate([
    (0, typeorm_1.Entity)('CEI_RSC_REQUISICIONES')
], Cei_Rsc_Entity);
exports.Cei_Rsc_Entity = Cei_Rsc_Entity;
//# sourceMappingURL=cei_rsc_entity.js.map