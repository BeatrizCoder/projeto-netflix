import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    findMany(): Promise<Filme[]>;
    delete(id: string): Promise<any>;
    deleteMany(): Promise<any>;
    update: any;
    updateFilme: CreateFilmeDto;
    : Promise<Filme>;
}
