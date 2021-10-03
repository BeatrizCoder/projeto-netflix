import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/createFilme.dto';
import { UpdateFilmeDto } from './dto/updateFilme.dto';
export default class FilmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    createFilme(filme: CreateFilmeDto): Promise<any>;
    updateFilme(id: number, filme: UpdateFilmeDto): Promise<any>;
    deleteFilme(id: number): Promise<any>;
}
