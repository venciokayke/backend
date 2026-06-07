import { IsNumber, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateIngressoDto {
  @IsNumber()
  @IsNotEmpty()
  valorInteira!: number;

  @IsNumber()
  @IsNotEmpty()
  valorMeia!: number;

  @IsInt()
  @IsNotEmpty()
  sessaoId!: number;

  @IsInt()
  @IsOptional() // Opcional, pois o ingresso pode ser criado antes de fechar o pedido
  pedidoId?: number; 
}