import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.service.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  async findOne(slug: string) {
    const service = await this.prisma.service.findUnique({
      where: {
        slug,
      },
    });

    if (!service || !service.isActive) {
      throw new NotFoundException(`Service '${slug}' not found`);
    }

    return service;
  }
}