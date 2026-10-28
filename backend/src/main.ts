
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // All API routes will start with /api
  app.setGlobalPrefix('api');

  // Allow requests from the local Next.js frontend
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = Number(process.env.PORT) || 4000;

  await app.listen(port);

  console.log(`UVIX API running at http://localhost:${port}/api`);
}

bootstrap();
