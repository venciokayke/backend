import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCinemaDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsString()
  @IsNotEmpty()
  endereco!: string;
}