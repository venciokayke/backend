import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({ example: 2, description: 'Quantidade de ingressos do tipo inteira' })
  @IsInt()
  @IsNotEmpty()
  qtInteira!: number;

  @ApiProperty({ example: 1, description: 'Quantidade de ingressos do tipo meia' })
  @IsInt()
  @IsNotEmpty()
  qtMeia!: number;

  @ApiProperty({ example: 100.00, description: 'Valor total a ser pago pelo cliente' })
  @IsNumber()
  @IsNotEmpty()
  valorTotal!: number;
}