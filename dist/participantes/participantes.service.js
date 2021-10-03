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
exports.ParticipantesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const updateParticipante_dto_1 = require("./dto/updateParticipante.dto");
let ParticipantesService = class ParticipantesService {
    constructor(prismaSerice) {
        this.prismaSerice = prismaSerice;
    }
    async createFilme(filme) {
        var _a, _b;
        const filmes = (_a = participantes.filmes) === null || _a === void 0 ? void 0 : _a.map((filme));
        ({
            id: filmes,
        });
        const generos = (_b = participantes.generos) === null || _b === void 0 ? void 0 : _b.map((genero));
        ({
            id: generos,
            return: this.prismaService.participante.create({
                data: {
                    nome: imagem, participante, : .imagem,
                    data_lancamento: participante.data_lancamento,
                    tempo_duracao: participante.tempo_duracao,
                    staff: Participante.staff,
                    ator: filmes
                }
            }, {
                generos,
                connect: filmes, generos
            })
        },
            include);
        {
            filmes: true,
                generos;
            true,
            ;
        }
    }
    ;
};
ParticipantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParticipantesService);
exports.ParticipantesService = ParticipantesService;
async;
(0, updateParticipante_dto_1.UpdateParticipanteDto)(id, number, participante, updateParticipante_dto_1.UpdateParticipanteDto);
{
    return await this;
    prisma_service_1.PrismaService.participante.update({
        data: Object.assign(Object.assign({}, participante), { id: undefined }),
        where: {
            id,
        },
    });
}
async;
deleteParticipante(id, number);
{
    return this;
    prisma.Service.participante.delete({
        where: {
            id,
        },
    });
}
//# sourceMappingURL=participantes.service.js.map