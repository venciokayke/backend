import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LancheComboService {
  constructor(private prisma: PrismaService) {}

  create(createLancheComboDto: CreateLancheComboDto) {
    return this.prisma.lancheCombo.create({ data: createLancheComboDto });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany();
  }

  async findOne(id: number) {
    const lancheCombo = await this.prisma.lancheCombo.findUnique({ where: { id } });
    if (!lancheCombo) {
      throw new NotFoundException(`O Lanche/Combo com o ID ${id} não existe.`);
    }
    return lancheCombo;
  }

  async update(id: number, updateLancheComboDto: UpdateLancheComboDto) {
    try {
      return await this.prisma.lancheCombo.update({
        where: { id },
        data: updateLancheComboDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: O Lanche/Combo com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.lancheCombo.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: O Lanche/Combo com o ID ${id} não existe ou já foi deletado.`);
      throw error;
    }
  }
}