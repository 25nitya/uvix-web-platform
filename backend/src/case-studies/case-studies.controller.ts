
import { Controller, Get, Param } from '@nestjs/common';
import { CaseStudiesService } from './case-studies.service.js';

@Controller('case-studies')
export class CaseStudiesController {
  constructor(
    private readonly caseStudiesService: CaseStudiesService,
  ) {}

  @Get()
  findAll() {
    return this.caseStudiesService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.caseStudiesService.findOne(slug);
  }
}
