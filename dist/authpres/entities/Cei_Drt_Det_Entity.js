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
exports.Cei_Drt_Det_Entity = void 0;
const typeorm_1 = require("typeorm");
let Cei_Drt_Det_Entity = class Cei_Drt_Det_Entity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "DRT_CODCIA", length: 3 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtCodcia", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "DRT_CODCTC", length: 2 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtCodctc", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "DRT_CODENT", length: 3 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtCodent", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { primary: true, name: "DRT_ANIREQ", precision: 4, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtAnireq", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { primary: true, name: "DRT_CODREQ", precision: 14, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtCodreq", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { primary: true, name: "DRT_ANIUSO", precision: 4, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtAniuso", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "DRT_ENTUSO", length: 3 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtEntuso", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("varchar2", { primary: true, name: "DRT_ESPUSO", length: 5 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtEspuso", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "DRT_PORCEN", precision: 5, scale: 2, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtPorcen", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "DRT_MONREQ", precision: 16, scale: 2, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtMonreq", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "DRT_DISREQ", precision: 16, scale: 2, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtDisreq", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "DRT_MONRSC", precision: 16, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtMonrsc", void 0);
__decorate([
    (0, typeorm_1.Column)("number", { name: "DRT_DISRSC", precision: 16, scale: 2, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtDisrsc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar2", { name: "DRT_VALPRE", length: 1 }),
    __metadata("design:type", String)
], Cei_Drt_Det_Entity.prototype, "drtValpre", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Column)("number", { name: "DRT_CODDRE", precision: 4, scale: 0, }),
    __metadata("design:type", Number)
], Cei_Drt_Det_Entity.prototype, "drtCoddre", void 0);
Cei_Drt_Det_Entity = __decorate([
    (0, typeorm_1.Index)("<CEI_DRT_PK>", ["drtCodcia", "drtCodctc", "drtCodent", "drtAnireq", "drtCodreq", "drtAniuso", "drtEntuso", "drtEspuso", "drtCoddre"], { unique: true }),
    (0, typeorm_1.Entity)("CEI_DRT_DET_RES_TEMPORAL")
], Cei_Drt_Det_Entity);
exports.Cei_Drt_Det_Entity = Cei_Drt_Det_Entity;
//# sourceMappingURL=Cei_Drt_Det_Entity.js.map