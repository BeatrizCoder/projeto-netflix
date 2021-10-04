import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGeneroDto } from "./dto/create-genero.dto;
import { UpdateGeneroDto } from './dto/updateGenero.dto';

@Injectable()
export class GeneroService{
  constructor(private readonly prismaSerice:PrismaService){}
  async createGenero(genero:CreateGeneroDto){
    const filmes=genero.filmes?.map((filme))=>({
      id:filmes,
    });
      const participantes=genero.participantes?.map((participante))=>({
        id:participantes,

      return this.prismaService.genero.create({
        data:{
          nome:genero.nome,
          filme:genero.filme,
          filmes:{
          participantes
          connect:filmes,participantes

          },
        },
        include:{
          filmes:true,
          participantes:true,
        },
      });
    }
    async UpdateGeneroDto(id:number, genero:UpdateGeneroDto){
      return await this PrismaService.genero.update({
        data:{
          ...genero,
          id:undefined,
        },
        where:{
          id,
        },
      });
    }
    async deleteGenero(id: number){
      return this prisma.Service.genero.delete({
        where: {
          id,
        },
      });
    }
  