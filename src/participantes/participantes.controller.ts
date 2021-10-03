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
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesService: PrticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() CreateParticipanteDto: CreateParticipanteDto): Promise<Participante> {
    return this.participanteService.createParticipante(CreateParticipante);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.getOneParticipante(id);
  }
  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.participantesService.deleteAllParticipantes();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesService.deleteOneParticipante({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateParticipante: CreateParticipanteDto
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participante> {
    return this.participantesService.updateOneParticipante(id, updateParticipante);
  }
}