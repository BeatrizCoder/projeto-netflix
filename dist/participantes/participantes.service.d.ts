import { PrismaService } from "src/prisma/prisma.service";
import { CreateParticipanteDto } from "./dto/create-participante.dto";
export declare class ParticipantesService {
    private readonly prismaSerice;
    constructor(prismaSerice: PrismaService);
    createFilme(filme: CreateParticipanteDto): Promise<void>;
}
