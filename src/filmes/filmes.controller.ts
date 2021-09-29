import { 
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Put,
    ValidationPipe,
    UsePipes,
    ParseIntPipe,
  
 } from '@nestjs/common';
 import { CreateFilmeDto } from './dto/create-filme.dto';
 import { FilmesService } from './filmes.service';
 import { Filme } from '.prisma/client';

 @Controller('filmes')
 export class FilmesController {
   constructor(private filmesService: FilmesService) {}

   @Get('/list')
   @UsePipes(ValidationPipe)
   async findMany(): Promise<Filme[]> {
     return this.filmesService.getAll();
   }

 @Post('/create')
 @Usepipes
