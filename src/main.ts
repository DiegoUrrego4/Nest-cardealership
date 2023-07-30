import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve data basura
      forbidNonWhitelisted: true, // Lanza errores en caso de que encuentre data basura
    }),
  );
  await app.listen(3000);
}

bootstrap();
