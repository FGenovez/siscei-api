import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('API SISCEI')
        .addBearerAuth()
        .setDescription('Esta es una API Creada con NestJS con un CRUD básico para el Módulo del Sistema de Proyectos de Ingenieria - junio 2021',
        )
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/docs', app, document);
};

