import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CinemaService {
  constructor(private prisma: PrismaService) {}

  create(createCinemaDto: CreateCinemaDto) {
    return this.prisma.cinema.create({
      data: createCinemaDto,
    });
  }

  findAll() {
    return this.prisma.cinema.findMany();
  }

  // Transformado em async para checar se o cinema existe
  async findOne(id: number) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id },
    });

    // O findUnique retorna null se não encontrar. Nós disparamos o erro 404:
    if (!cinema) {
      throw new NotFoundException(`O Cinema com o ID ${id} não existe.`);
    }

    return cinema;
  }

  // Transformado em async com try...catch
  async update(id: number, updateCinemaDto: UpdateCinemaDto) {
    try {
      return await this.prisma.cinema.update({
        where: { id },
        data: updateCinemaDto,
      });
    } catch (error: any) { // <- Usando ': any' resolve os erros do TypeScript!
      if (error.code === 'P2025') {
        throw new NotFoundException(`Não foi possível atualizar: O Cinema com o ID ${id} não existe.`);
      }
      throw error;
    }
  }

  // Transformado em async com try...catch
  async remove(id: number) {
    try {
      return await this.prisma.cinema.delete({
        where: { id },
      });
    } catch (error: any) { // <- Usando ': any'
      if (error.code === 'P2025') {
        throw new NotFoundException(`Não foi possível remover: O Cinema com o ID ${id} não existe ou já foi deletado.`);
      }
      throw error;
    }
  }
}