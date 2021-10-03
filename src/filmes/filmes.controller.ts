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
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/createFilme.dto';
import { UpdateFilmeDto } from './dto/updateFilme.dto';

@Controller('filmes')
export default class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createFilme(@Body() filme: CreateFilmeDto) {
    return this.filmesService.createFilmes(filmes);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateFilme(
    @Param('id', ParseIntPipe) id: number,
    @Body() filme: UpdateFilmeDto,
  ) {
    return this.filmesService.updateFilme(id, filme);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: number) {
    return this.filmesService.deleteFilme(id);
  }
}
