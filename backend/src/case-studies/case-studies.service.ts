
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CaseStudiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.caseStudy.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(slug: string) {
    const caseStudy = await this.prisma.caseStudy.findUnique({
      where: { slug },
      include: { detail: true },
    });

    if (!caseStudy || !caseStudy.isPublished) {
      throw new NotFoundException(`Case study '${slug}' not found`);
    }

    return caseStudy;
  }
}
