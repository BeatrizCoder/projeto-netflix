import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';

@Module({
  providers: [GenerosService],
  controllers: [GenerosController]
})
export class GenerosModule {}
