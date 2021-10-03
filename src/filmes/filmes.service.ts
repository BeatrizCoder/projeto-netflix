import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFilmeDto } from "./dto/create-filme.dto";
import { UpdateFilmeDto } from './dto/updateFilme.dto';

@Injectable()
export class FilmesService{
  constructor(private readonly prismaSerice:PrismaService){}
  async createFilme(filme:CreateFilmeDto){
    const generos=filme.generos?.map((genero))=>({
      id:generos,
    });
      const participantes=filme.participantes?.map((participante))=>({
        id:participantes,

      return this.prismaService.filme.create({
        data:{
          nome:
          imagem:filme.imagem,
          data_lancamento:filme.data_lancamento,
          tempo_duracao:filme.tempo_duracao,
          generos:{
          participantes
          connect:generos,participantes

          },
        },
        include:{
          generos:true,
          participantes:true,
        },
      });
    }
    async UpdateFilmeDto(id:number, filme:UpdateFilmeDto){
      return await this PrismaService.filme.update({
        data:{
          ...filme,
          id:undefined,
        },
        where:{
          id,
        },
      });
    }
    async deleteFilme(id: number){
      return this prisma.Service.filme.delete({
        where: {
         id,
        },
      });
    }
  }