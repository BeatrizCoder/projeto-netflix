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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const generos_service_1 = require("./generos.service");
const createGenero_dto_1 = require("./dto/createGenero.dto");
const updateGenero_dto_1 = require("./dto/updateGenero.dto");
let GenerosController = class GenerosController {
    constructor(generosService) {
        this.generosService = generosService;
    }
    async createGenero(genero) {
        return this.generosService.createGeneros(generos);
    }
    async updateGenero(id, genero) {
        return this.generosService.updateGenero(id, genero);
    }
    async deleteFilme(id) {
        return this.generosService.deleteGenero(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof createGenero_dto_1.CreateGeneroDto !== "undefined" && createGenero_dto_1.CreateGeneroDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "createGenero", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof updateGenero_dto_1.UpdateGeneroDto !== "undefined" && updateGenero_dto_1.UpdateGeneroDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "updateGenero", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "deleteFilme", null);
GenerosController = __decorate([
    (0, common_1.Controller)('generos'),
    __metadata("design:paramtypes", [typeof (_c = typeof generos_service_1.GenerosService !== "undefined" && generos_service_1.GenerosService) === "function" ? _c : Object])
], GenerosController);
exports.default = GenerosController;
//# sourceMappingURL=generos.controller.js.map