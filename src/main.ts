import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);

  // 🔹 This enables validation globally (for all DTOs)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,             // removes unwanted fields
    forbidNonWhitelisted: true,  // throws error if unwanted fields exist
    transform: true,             // auto converts input to DTO
  }));

  await app.listen(3000);
  console.log('🚀 Server running on http://localhost:3000');
}
bootstrap();
