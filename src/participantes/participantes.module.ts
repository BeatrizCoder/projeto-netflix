import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';

@Module({
  providers: [ParticipantesService],
  controllers: [ParticipantesController]
})
export class ParticipantesModule {}
