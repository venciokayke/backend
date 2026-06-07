import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLancheComboDto {
  @ApiProperty({ example: 'Combo Pipoca + Refri', description: 'Nome comercial do lanche ou combo' })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'Uma pipoca grande e dois refrigerantes de 500ml', description: 'Detalhes do que está incluso' })
  @IsString()
  @IsNotEmpty()
  descricao!: string;

  @ApiProperty({ example: 35.50, description: 'Preço unitário do lanche/combo' })
  @IsNumber()
  @IsNotEmpty()
  valorUnitario!: number;

  @ApiProperty({ example: 2, description: 'Quantidade comprada' })
  @IsInt()
  @IsNotEmpty()
  qtUnidade!: number;

  @ApiProperty({ example: 71.00, description: 'Subtotal calculado (valorUnitario * qtUnidade)' })
  @IsNumber()
  @IsNotEmpty()
  subtotal!: number;

  @ApiPropertyOptional({ example: 1, description: 'ID do pedido associado (opcional)' })
  @IsInt()
  @IsOptional()
  pedidoId?: number;
}