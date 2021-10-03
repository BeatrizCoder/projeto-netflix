import { Injectable } from '@nestjs/common';
import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async deleteOneGenero(where: Prisma.FilmeWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deleteAllGeneros() {
    return this.prisma.genero.deleteMany();
  }

  async updateOneGenero(
    filmeId: number,
    data: Prisma.FilmeCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }

  async getOneGenero(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
    });
  }
}
