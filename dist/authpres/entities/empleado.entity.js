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
exports.Empleados = void 0;
const typeorm_1 = require("typeorm");
let Empleados = class Empleados {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'EMP_CODCIA', type: 'varchar2', length: 3 }),
    __metadata("design:type", String)
], Empleados.prototype, "codcia", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'EMP_CODIGO' }),
    __metadata("design:type", Number)
], Empleados.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_NOMBRE_CIP', type: 'varchar2', length: 60 }),
    __metadata("design:type", String)
], Empleados.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_CORREO', type: 'varchar2', length: 25 }),
    __metadata("design:type", String)
], Empleados.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_CODENTI', type: 'varchar2', length: 3 }),
    __metadata("design:type", String)
], Empleados.prototype, "codenti", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_CODCEL', type: 'varchar2', length: 8 }),
    __metadata("design:type", String)
], Empleados.prototype, "codcel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_SEXO', type: 'varchar2', length: 1 }),
    __metadata("design:type", String)
], Empleados.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_PROFESION', type: 'varchar2', length: 90 }),
    __metadata("design:type", String)
], Empleados.prototype, "profesion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'EMP_ESTADO', type: 'varchar2', length: 1 }),
    __metadata("design:type", String)
], Empleados.prototype, "estado", void 0);
Empleados = __decorate([
    (0, typeorm_1.Entity)('PLA_EMP_EMPLEADO')
], Empleados);
exports.Empleados = Empleados;
//# sourceMappingURL=empleado.entity.js.map