"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FilmesService = class FilmesService {
    constructor(prismaSerice) {
        this.prismaSerice = prismaSerice;
    }
    async createGenero(genero) {
        var _a, _b;
        const filmes = (_a = genero.filmes) === null || _a === void 0 ? void 0 : _a.map((filme));
        ({
            id: filmes,
        });
        const participantes = (_b = genero.participantes) === null || _b === void 0 ? void 0 : _b.map((participante));
        ({
            id: participantes,
            return: this.prismaService.genero.create({
                data: {
                    nome: genero.nome,
                    filme: genero.filme,
                    filmes: {
                        participantes,
                        connect: filmes, participantes
                    },
                },
                include: {
                    filmes: true,
                    participantes: true,
                },
            })
        });
        async;
        UpdateGeneroDto(id, number, genero, UpdateGeneroDto);
        {
            return await this;
            prisma_service_1.PrismaService.genero.update({
                data: Object.assign(Object.assign({}, genero), { id: undefined }),
                where: {
                    id,
                },
            });
        }
        async;
        deleteGenero(id, number);
        {
            return this;
            prisma.Service.genero.delete({
                where: {
                    id,
                },
            });
        }
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=generos.service.js.map