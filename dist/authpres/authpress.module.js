"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthpresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const authpres_controller_1 = require("./authpres.controller");
const authpres_service_1 = require("./authpres.service");
const Cei_Drt_Det_Entity_1 = require("./entities/Cei_Drt_Det_Entity");
const cei_rsc_entity_1 = require("./entities/cei_rsc_entity");
const empleado_entity_1 = require("./entities/empleado.entity");
const unidad_entity_1 = require("./entities/unidad.entity");
let AuthpresModule = class AuthpresModule {
};
AuthpresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Cei_Drt_Det_Entity_1.Cei_Drt_Det_Entity, cei_rsc_entity_1.Cei_Rsc_Entity, empleado_entity_1.Empleados, unidad_entity_1.Unidades])],
        controllers: [authpres_controller_1.AuthpresController],
        providers: [authpres_service_1.AuthpresService]
    })
], AuthpresModule);
exports.AuthpresModule = AuthpresModule;
//# sourceMappingURL=authpress.module.js.map