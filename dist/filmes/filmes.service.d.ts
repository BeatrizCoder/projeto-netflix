import { PrismaService } from "src/prisma/prisma.service";
import { CreateFilmeDto } from "./dto/create-filme.dto";
export declare class FilmesService {
    private readonly prismaSerice;
    constructor(prismaSerice: PrismaService);
    createFilme(filme: CreateFilmeDto): Promise<this>;
}
