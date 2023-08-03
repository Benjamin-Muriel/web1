import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Index
  @Get()
  getEstudiante() {
    return this.appService.index();
  }

  // Create
  @Post()
  createEstudiante(@Body() jsonRequest: Request) {
    return this.appService.create(jsonRequest);
  }

  // Show
  @Get(':id')
  showEstudiante(@Param('id') id: string ) {
    return this.appService.show(id);
  }


  // Edit
  @Post(':id')
  editEstudiante(@Param('id') id: string, @Body() request: Request) {
    return this.appService.edit(id, request);
  }

}
