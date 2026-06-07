import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsInt()
  @IsNotEmpty()
  qtInteira!: number;

  @IsInt()
  @IsNotEmpty()
  qtMeia!: number;

  @IsNumber()
  @IsNotEmpty()
  valorTotal!: number;
}