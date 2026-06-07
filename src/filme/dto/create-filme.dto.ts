import { IsString, IsNotEmpty, IsInt, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Genero } from '../../generated/prisma/enums'; 

export class CreateFilmeDto {
  @ApiProperty({ example: 'O Senhor dos Anéis', description: 'Título oficial do filme' })
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @ApiProperty({ example: 'Um hobbit recebe a tarefa de destruir um anel mágico...', description: 'Breve resumo da história' })
  @IsString()
  @IsNotEmpty()
  sinopse!: string;

  @ApiProperty({ example: '12 anos', description: 'Classificação indicativa' })
  @IsString()
  @IsNotEmpty()
  classificacao!: string;

  @ApiProperty({ example: '2026-06-03T02:30:00Z', description: 'Duração do filme no formato ISO 8601' })
  @IsDateString()
  @IsNotEmpty()
  duracao!: string;

  @ApiProperty({ example: 'Elijah Wood, Ian McKellen', description: 'Atores principais' })
  @IsString()
  @IsNotEmpty()
  elenco!: string;

  @ApiProperty({ enum: Genero, example: 'Ficcao', description: 'Gênero do filme' })
  @IsEnum(Genero)
  @IsNotEmpty()
  genero!: Genero;

  @ApiProperty({ example: '2026-06-10T00:00:00Z', description: 'Data de início de cartaz' })
  @IsDateString()
  @IsNotEmpty()
  dataIniciaExibicao!: string;

  @ApiProperty({ example: '2026-07-10T00:00:00Z', description: 'Data de saída de cartaz' })
  @IsDateString()
  @IsNotEmpty()
  dataFinalExibicao!: string;

  @ApiProperty({ example: 1, description: 'ID do cinema onde o filme será exibido' })
  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}