import { PrismaService } from "src/prisma/prisma.service";
import { CreateFilmeDto } from "./dto/create-filme.dto";
export declare class FilmesService {
    private readonly prismaSerice;
    constructor(prismaSerice: PrismaService);
    createGenero(genero: CreateFilmeDto): Promise<this>;
}
