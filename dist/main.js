"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_swagger_1 = require("./app.swagger");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const crPath = 'server.cert';
const pkPath = 'server.key';
let httpsOptions = {};
async function bootstrap() {
    if (fs.existsSync(crPath) && fs.existsSync(pkPath)) {
        httpsOptions = {
            cert: fs.readFileSync(crPath),
            key: fs.readFileSync(pkPath)
        };
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    (0, app_swagger_1.initSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors();
    await app.listen(3012);
    console.log(`La aplicación esta corriendo en: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map