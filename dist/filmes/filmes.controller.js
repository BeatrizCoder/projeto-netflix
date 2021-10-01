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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesController = void 0;
const common_1 = require("@nestjs/common");
const create_filme_dto_1 = require("./dto/create-filme.dto");
const filmes_service_1 = require("./filmes.service");
let FilmesController = class FilmesController {
    constructor(filmesService) {
        this.filmesService = filmesService;
    }
    async create(createFilme) {
        return this.filmesService.createFilme(createFilme);
    }
    async findMany() {
        return this.filmesService.getAll();
    }
    async delete(id) {
        return this.filmesService.deleteOneFilme({ id: Number(id) });
    }
    async deleteMany() {
        return this.filmesService.deleteAllFilmes();
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filme_dto_1.CreateFilmeDto]),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "findMany", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "deleteMany", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Object)
], FilmesController.prototype, "update", void 0);
__decorate([
    (0, common_1.Body)(),
    __metadata("design:type", create_filme_dto_1.CreateFilmeDto)
], FilmesController.prototype, "updateFilme", void 0);
__decorate([
    (0, common_1.Param)('id,ParseIntPipe) id:number,),
    __metadata("design:type", Promise)
], FilmesController.prototype, "", void 0);
FilmesController = __decorate([
    (0, common_1.Controller)('filmes'),
    __metadata("design:paramtypes", [filmes_service_1.FilmesService])
], FilmesController);
exports.FilmesController = FilmesController;
{
    return this;
    filmes_service_1.FilmesService.updateOneFilme(id);
}
findUnique();
id: number;
{
    return this.filmesService.getOneFilme(id);
}
//# sourceMappingURL=filmes.controller.js.map