import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  create(createIngressoDto: CreateIngressoDto) {
    return this.prisma.ingresso.create({ data: createIngressoDto });
  }

  findAll() {
    return this.prisma.ingresso.findMany();
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({ where: { id } });
    if (!ingresso) {
      throw new NotFoundException(`O Ingresso com o ID ${id} não existe.`);
    }
    return ingresso;
  }

  async update(id: number, updateIngressoDto: UpdateIngressoDto) {
    try {
      return await this.prisma.ingresso.update({
        where: { id },
        data: updateIngressoDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: O Ingresso com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.ingresso.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: O Ingresso com o ID ${id} não existe ou já foi deletado.`);
      throw error;
    }
  }
}