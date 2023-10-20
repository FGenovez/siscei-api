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
exports.Unidades = void 0;
const typeorm_1 = require("typeorm");
let Unidades = class Unidades {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'UNI_CODCIA', type: 'varchar2', length: 3 }),
    __metadata("design:type", String)
], Unidades.prototype, "codcia", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'UNI_CODIGO' }),
    __metadata("design:type", Number)
], Unidades.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UNI_NOMBRE', type: 'varchar2', length: 80 }),
    __metadata("design:type", String)
], Unidades.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UNI_CODENTI', type: 'varchar2', length: 5 }),
    __metadata("design:type", String)
], Unidades.prototype, "codenti", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UNI_ESTADO', type: 'varchar2', length: 1 }),
    __metadata("design:type", String)
], Unidades.prototype, "estado", void 0);
Unidades = __decorate([
    (0, typeorm_1.Entity)('PLA_UNI_UNIDAD')
], Unidades);
exports.Unidades = Unidades;
//# sourceMappingURL=unidad.entity.js.map