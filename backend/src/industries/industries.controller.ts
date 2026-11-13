import { Controller, Get, Param } from '@nestjs/common';
import { IndustriesService } from './industries.service.js';

@Controller('industries')
export class IndustriesController {
  constructor(
    private readonly industriesService: IndustriesService,
  ) {}

  @Get()
  findAll() {
    return this.industriesService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.industriesService.findOne(slug);
  }
}