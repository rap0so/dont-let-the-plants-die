import { NestFactory } from '@nestjs/core';
import DefaultResponseMiddleware from './common/middleware/defaultResponse.middleware';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new DefaultResponseMiddleware());

  await app.listen(3000);
}
bootstrap();
