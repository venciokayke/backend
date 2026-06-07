import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSessaoDto {
  @ApiProperty({ example: '2026-06-15T19:00:00Z', description: 'Data e hora exata da sessão no formato ISO 8601' })
  @IsDateString()
  @IsNotEmpty()
  horarioExibicao!: string;

  @ApiProperty({ example: 1, description: 'ID do filme que será exibido' })
  @IsInt()
  @IsNotEmpty()
  filmeId!: number;

  @ApiProperty({ example: 1, description: 'ID da sala onde ocorrerá a sessão' })
  @IsInt()
  @IsNotEmpty()
  salaId!: number;

  @ApiProperty({ example: 1, description: 'ID do cinema' })
  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}