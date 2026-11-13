import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ServicesModule } from './services/services.module.js';
import { IndustriesModule } from './industries/industries.module.js';
import { CaseStudiesModule } from './case-studies/case-studies.module.js';

@Module({
  imports: [PrismaModule, ServicesModule, IndustriesModule,CaseStudiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

