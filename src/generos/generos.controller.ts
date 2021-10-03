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
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService} from './generos.module';
import { Genero } from '.prisma/client';

@Controller('generos')
export class FilmesController {
  constructor(private generosService: GenerosService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() CreateGenero: CreateGeneroDto): Promise<Genero> {
    return this.generosService.CreateGenero(CreateGenero);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.generosService.getOneGenero(id);
  }
  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generosService.getAll();
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.generosService.deleteAllGeneros();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generosService.deleteOneGenero({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: CreateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero> {
    return this.generosService.updateOneGenero(id, updateGenero);
  }
}