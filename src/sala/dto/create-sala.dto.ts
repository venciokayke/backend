import { IsInt, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateSalaDto {
  @IsInt()
  @IsNotEmpty()
  numero!: number;

  @IsInt()
  @IsNotEmpty()
  capacidade!: number;

  @IsDefined()
  @IsNotEmpty()
  poutronas: any; // O tipo é 'any' aqui porque no Prisma definimos como Json

  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}