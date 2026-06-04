import { Injectable } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  create(createSessaoDto: CreateSessaoDto) {
    return 'This action adds a new sessao';
  }

  findAll() {
    return `This action returns all sessao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sessao`;
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    return `This action updates a #${id} sessao`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessao`;
  }
}
