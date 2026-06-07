import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(createFilmeDto: CreateFilmeDto) {
    return this.prisma.filme.create({ data: createFilmeDto });
  }

  findAll() {
    return this.prisma.filme.findMany();
  }

  async findOne(id: number) {
    const filme = await this.prisma.filme.findUnique({ where: { id } });
    if (!filme) {
      throw new NotFoundException(`O Filme com o ID ${id} não existe.`);
    }
    return filme;
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto) {
    try {
      return await this.prisma.filme.update({
        where: { id },
        data: updateFilmeDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível atualizar: O Filme com o ID ${id} não existe.`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.filme.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') throw new NotFoundException(`Não foi possível remover: O Filme com o ID ${id} não existe ou já foi deletado.`);
      throw error;
    }
  }
}