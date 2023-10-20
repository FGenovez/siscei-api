"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_swagger_1 = require("./app.swagger");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, app_swagger_1.initSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    app.enableCors();
    await app.listen(3012);
    console.log(`La aplicación esta corriendo en: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map