import { IsString, IsNotEmpty, IsInt, IsEnum, IsDateString } from 'class-validator';
import { Genero } from '../../generated/prisma/enums'; 

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  sinopse!: string;

  @IsString()
  @IsNotEmpty()
  classificacao!: string;

  @IsDateString()
  @IsNotEmpty()
  duracao!: string; // Enviado como ISO String (ex: "2026-06-03T00:00:00Z")

  @IsString()
  @IsNotEmpty()
  elenco!: string;

  @IsEnum(Genero)
  @IsNotEmpty()
  genero!: Genero;

  @IsDateString()
  @IsNotEmpty()
  dataIniciaExibicao!: string;

  @IsDateString()
  @IsNotEmpty()
  dataFinalExibicao!: string;

  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}