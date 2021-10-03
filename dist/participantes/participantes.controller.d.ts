import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/updatePaticipante.dto';
export default class ParticipantesController {
    private readonly participantesService;
    constructor(participantesService: ParticipantesService);
    createParticipante(participante: CreateParticipanteDto): Promise<any>;
    updateParticipante(id: number, genero: UpdateParticipanteDto): Promise<any>;
    deleteParticipante(id: number): Promise<any>;
}
