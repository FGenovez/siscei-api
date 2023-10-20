"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const authpress_module_1 = require("./authpres/authpress.module");
const Cei_Drt_Det_Entity_1 = require("./authpres/entities/Cei_Drt_Det_Entity");
const empleado_entity_1 = require("./authpres/entities/empleado.entity");
const unidad_entity_1 = require("./authpres/entities/unidad.entity");
const cei_rsc_entity_1 = require("./authpres/entities/cei_rsc_entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            authpress_module_1.AuthpresModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'oracle',
                connectString: '192.168.1.14:1521/FINANC',
                port: 1521,
                username: 'WSISCEI',
                password: '4pl1c4c10n3sw3b',
                database: 'FINANC',
                schema: '',
                logging: true,
                entities: [Cei_Drt_Det_Entity_1.Cei_Drt_Det_Entity, empleado_entity_1.Empleados, unidad_entity_1.Unidades, cei_rsc_entity_1.Cei_Rsc_Entity],
            }),
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: {
                        host: process.env.HOST_MAIL,
                        port: parseInt(process.env.PORT_MAIL),
                        secure: false,
                        tls: { rejectUnauthorized: false },
                    },
                    defaults: {
                        from: '"nest-modules" <modules@nestjs.com>',
                    },
                    files: [
                        {
                            filename: 'image.jpg',
                            contentType: 'image/jpeg',
                            cid: 'myimagecid'
                        }
                    ],
                    template: {
                        dir: process.cwd(),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
            }),
            authpress_module_1.AuthpresModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map