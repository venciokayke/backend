import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({ data: createSalaDto });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }

  async findOne(id: number) {
    const sala = await this.prisma.sala.findUnique({ where: { id } });
    if (!sala) {
      throw new NotFoundException(`A Sala com o ID ${id} não existe.`);
    }
    return sala;
  }

  async update(id: number, updateSalaDto: UpdateSalaDto) {
    try {
      return await this.prisma.sala.update({
        where: { id },
        data: updateSalaDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: A Sala com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.sala.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: A Sala com o ID ${id} não existe ou já foi deletada.`);
      throw error;
    }
  }
}