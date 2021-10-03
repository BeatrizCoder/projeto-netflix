import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateParticipanteDto } from "./dto/create-participante.dto";
import { UpdateParticipanteDto } from './dto/updateParticipante.dto';

@Injectable()
export class ParticipantesService{
  constructor(private readonly prismaSerice:PrismaService){}
  async createFilme(filme:CreateParticipanteDto){
    const filmes=participantes.filmes?.map((filme))=>({
      id:filmes,
    });
      const generos=participantes.generos?.map((genero))=>({
        id:generos,

      return this.prismaService.participante.create({
        data:{
          nome:
          imagem:participante.imagem,
          data_lancamento:participante.data_lancamento,
          tempo_duracao:participante.tempo_duracao,
          staff:Participante.staff,
          ator:
          filmes:{
          generos
            connect: filmes,generos

          },
        },
        include:{
          filmes:true,
          generos:true,
        },
      });
    }
    async UpdateParticipanteDto(id:number, participante:UpdateParticipanteDto){
      return await this PrismaService.participante.update({
        data:{
          ...participante,
          id:undefined,
        },
        where:{
          id,
        },
      });
    }
    async deleteParticipante(id: number){
      return this prisma.Service.participante.delete({
        where: {
          id,
        },
      });
    }
  