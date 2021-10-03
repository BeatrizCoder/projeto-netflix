import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/createGenero.dto';
import { UpdateGeneroDto } from './dto/updateGenero.dto';

@Controller('generos')
export default class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createGenero(@Body() genero: CreateGeneroDto) {
    return this.generosService.createGeneros(generos);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateGenero(
    @Param('id', ParseIntPipe) id: number,
    @Body() genero: UpdateGeneroDto,
  ) {
    return this.generosService.updateGenero(id, genero);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: number) {
    return this.generosService.deleteGenero(id);
  }
}
