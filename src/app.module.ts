import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { ParticipantesModule } from './participantes/participantes.module';
import { GenerosModule } from './generos/generos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilmesModule, ParticipantesModule, GenerosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
