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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const filmes_service_1 = require("./filmes.service");
const createFilme_dto_1 = require("./dto/createFilme.dto");
const updateFilme_dto_1 = require("./dto/updateFilme.dto");
let FilmesController = class FilmesController {
    constructor(filmesService) {
        this.filmesService = filmesService;
    }
    async createFilme(filme) {
        return this.filmesService.createFilmes(filmes);
    }
    async updateFilme(id, filme) {
        return this.filmesService.updateFilme(id, filme);
    }
    async deleteFilme(id) {
        return this.filmesService.deleteFilme(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof createFilme_dto_1.CreateFilmeDto !== "undefined" && createFilme_dto_1.CreateFilmeDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "createFilme", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof updateFilme_dto_1.UpdateFilmeDto !== "undefined" && updateFilme_dto_1.UpdateFilmeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "updateFilme", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FilmesController.prototype, "deleteFilme", null);
FilmesController = __decorate([
    (0, common_1.Controller)('filmes'),
    __metadata("design:paramtypes", [filmes_service_1.FilmesService])
], FilmesController);
exports.default = FilmesController;
//# sourceMappingURL=filmes.controller.js.map