import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateSessaoDto {
  @IsDateString()
  @IsNotEmpty()
  horarioExibicao!: string;

  @IsInt()
  @IsNotEmpty()
  filmeId!: number;

  @IsInt()
  @IsNotEmpty()
  salaId!: number;

  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}