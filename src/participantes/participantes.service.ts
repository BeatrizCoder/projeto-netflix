import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  async deleteOneParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }

  async deleteAllParticipantes() {
    return this.prisma.filme.deleteMany();
  }

  async updateOneParticipante(
    filmeId: number,
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }

  async getOneParticipante(filmeId: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: {
        id: participanteId,
      },
    });
  }
}
