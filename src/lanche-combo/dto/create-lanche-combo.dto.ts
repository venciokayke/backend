import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';

export class CreateLancheComboDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsString()
  @IsNotEmpty()
  descricao!: string;

  @IsNumber()
  @IsNotEmpty()
  valorUnitario!: number;

  @IsInt()
  @IsNotEmpty()
  qtUnidade!: number;

  @IsNumber()
  @IsNotEmpty()
  subtotal!: number;

  @IsInt()
  @IsOptional()
  pedidoId?: number;
}