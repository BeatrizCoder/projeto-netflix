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
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/updatePaticipante.dto';

@Controller('participantes')
export default class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createParticipante(@Body() participante: CreateParticipanteDto) {
    return this.participantesService.createParticipantes(participante);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateParticipante(
    @Param('id', ParseIntPipe) id: number,
    @Body() genero: UpdateParticipanteDto,
  ) {
    return this.participantesService.updateParticipante(id, participante);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteParticipante(@Param('id') id: number) {
    return this.participantesService.deleteParticipante(id);
  }
}
