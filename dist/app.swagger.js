"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const initSwagger = (app) => {
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('API SISCEI')
        .addBearerAuth()
        .setDescription('Esta es una API Creada con NestJS con un CRUD básico para el Módulo del Sistema de Compras e Inventarios - Noviembre 2021')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('/docs', app, document);
};
exports.initSwagger = initSwagger;
//# sourceMappingURL=app.swagger.js.map