
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  // All API routes will start with /api
  app.setGlobalPrefix('api');

  // Read allowed frontend origins from environment variables
  const allowedOrigins = (
    process.env.CORS_ORIGINS ||
    'http://localhost:3000,http://localhost:3001'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = Number(process.env.PORT) || 4000;

  await app.listen(port);

  console.log(`UVIX API listening on port ${port}`);
}

bootstrap();
