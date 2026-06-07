import { IsNumber, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIngressoDto {
  @ApiProperty({ example: 40.00, description: 'Valor cobrado para ingresso inteiro' })
  @IsNumber()
  @IsNotEmpty()
  valorInteira!: number;

  @ApiProperty({ example: 20.00, description: 'Valor cobrado para meia-entrada' })
  @IsNumber()
  @IsNotEmpty()
  valorMeia!: number;

  @ApiProperty({ example: 1, description: 'ID da sessão escolhida' })
  @IsInt()
  @IsNotEmpty()
  sessaoId!: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do pedido associado (opcional no momento da criação)' })
  @IsInt()
  @IsOptional()
  pedidoId?: number;
}