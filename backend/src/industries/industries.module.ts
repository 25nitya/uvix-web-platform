import { Module } from '@nestjs/common';
import { IndustriesController } from './industries.controller.js';
import { IndustriesService } from './industries.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [IndustriesController],
  providers: [IndustriesService],
})
export class IndustriesModule {}