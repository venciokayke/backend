import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({ data: createPedidoDto });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`O Pedido com o ID ${id} não existe.`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    try {
      return await this.prisma.pedido.update({
        where: { id },
        data: updatePedidoDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: O Pedido com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.pedido.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: O Pedido com o ID ${id} não existe ou já foi deletado.`);
      throw error;
    }
  }
}