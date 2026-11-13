import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class IndustriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.industry.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(slug: string) {
    const industry = await this.prisma.industry.findUnique({
      where: { slug },
    });

    if (!industry || !industry.isActive) {
      throw new NotFoundException(`Industry '${slug}' not found`);
    }

    return industry;
  }
}