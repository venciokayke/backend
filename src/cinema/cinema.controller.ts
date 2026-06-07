import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // <-- Importações do Swagger [cite: 206]

@ApiTags('cinema') // Agrupa os endpoints sob a tag 'cinema' no Swagger [cite: 207]
@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cinema' }) // [cite: 212]
  @ApiResponse({ status: 201, description: 'Cinema criado com sucesso.' }) // [cite: 213]
  @ApiResponse({ status: 400, description: 'Dados inválidos.' }) // [cite: 214]
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemaService.create(createCinemaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cinemas' }) // [cite: 218]
  findAll() {
    return this.cinemaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um cinema pelo ID' }) // [cite: 222]
  findOne(@Param('id') id: string) {
    return this.cinemaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cinema' }) // [cite: 226]
  update(@Param('id') id: string, @Body() updateCinemaDto: UpdateCinemaDto) {
    return this.cinemaService.update(+id, updateCinemaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cinema' }) // [cite: 232]
  remove(@Param('id') id: string) {
    return this.cinemaService.remove(+id);
  }
}