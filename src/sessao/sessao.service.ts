import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  create(createSessaoDto: CreateSessaoDto) {
    return this.prisma.sessao.create({ data: createSessaoDto });
  }

  findAll() {
    return this.prisma.sessao.findMany();
  }

  async findOne(id: number) {
    const sessao = await this.prisma.sessao.findUnique({ where: { id } });
    if (!sessao) {
      throw new NotFoundException(`A Sessão com o ID ${id} não existe.`);
    }
    return sessao;
  }

  async update(id: number, updateSessaoDto: UpdateSessaoDto) {
    try {
      return await this.prisma.sessao.update({
        where: { id },
        data: updateSessaoDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: A Sessão com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.sessao.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: A Sessão com o ID ${id} não existe ou já foi deletada.`);
      throw error;
    }
  }
}