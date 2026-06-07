import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCinemaDto {
  @ApiProperty({ example: 'CineStar VIP', description: 'Nome da unidade do cinema' })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'Av. Paulista, 1000 - São Paulo, SP', description: 'Endereço completo do cinema' })
  @IsString()
  @IsNotEmpty()
  endereco!: string;
}