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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantesController = void 0;
const common_1 = require("@nestjs/common");
const create_participante_dto_1 = require("./dto/create-participante.dto");
let ParticipantesController = class ParticipantesController {
    constructor(participantesService) {
        this.participantesService = participantesService;
    }
    async create(createGenero) {
        return this.participantesService.createParticipante(createParticiante);
        findMany();
        Promise < participante[] > {
            return: this.participanteService.getAll()
        };
        findUnique();
        id: number;
        {
            return this.participantesService.getOneParticipante(id);
        }
        update();
        updateParticipante: create_participante_dto_1.CreateParticipanteDto,
        ;
        id: number,
        ;
        Promise < Filme > {
            return: this.participantesService.updateOneParticipante(id, updateParticipante)
        };
        delete ();
        id: string;
        {
            return this.participantesService.deleteOneParticipante({ id: Number(id) });
        }
        deleteMany();
        {
            return this.participantesService.deleteAllParticipantes();
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participante_dto_1.CreateParticipanteDto]),
    __metadata("design:returntype", Promise)
], ParticipantesController.prototype, "create", null);
ParticipantesController = __decorate([
    (0, common_1.Controller)('participantes'),
    __metadata("design:paramtypes", [typeof (_a = typeof ParticpantesService !== "undefined" && ParticpantesService) === "function" ? _a : Object])
], ParticipantesController);
exports.ParticipantesController = ParticipantesController;
//# sourceMappingURL=participantes.controller.js.map