import { IsInt, IsNotEmpty, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaDto {
  @ApiProperty({ example: 1, description: 'Número de identificação da sala' })
  @IsInt()
  @IsNotEmpty()
  numero!: number;

  @ApiProperty({ example: 120, description: 'Capacidade máxima de pessoas' })
  @IsInt()
  @IsNotEmpty()
  capacidade!: number;

  @ApiProperty({ example: { filas: 10, assentosPorFila: 12 }, description: 'Mapa de poltronas em formato JSON' })
  @IsDefined()
  @IsNotEmpty()
  poutronas!: any;

  @ApiProperty({ example: 1, description: 'ID do cinema ao qual a sala pertence' })
  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}