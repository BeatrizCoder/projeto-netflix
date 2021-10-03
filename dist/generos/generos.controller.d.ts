import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/createGenero.dto';
import { UpdateGeneroDto } from './dto/updateGenero.dto';
export default class GenerosController {
    private readonly generosService;
    constructor(generosService: GenerosService);
    createGenero(genero: CreateGeneroDto): Promise<any>;
    updateGenero(id: number, genero: UpdateGeneroDto): Promise<any>;
    deleteFilme(id: number): Promise<any>;
}
