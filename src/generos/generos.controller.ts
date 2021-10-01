import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Put,
    ValidationPipe,
    UsePipes,
    ParseIntPipe,

import { Controller } from '@nestjs/common';
import { CreateGeneroDto } from "src/generos/dto/create-genero.dto";

@Controller('generos')
export class GenerosController {}
