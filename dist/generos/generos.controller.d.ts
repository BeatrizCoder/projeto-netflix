import { CreateGeneroDto } from './dto/create-genero.dto;;
import { GenerosService } from './generos.service';
import { Genero } from '.prisma/client';
export declare class GenerosController {
    private generosService;
    constructor(generosService: GenerosService);
    create(createGenero: CreateGeneroDto): Promise<Genero>;
}
