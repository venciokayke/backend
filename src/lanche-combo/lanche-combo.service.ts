import { Injectable } from '@nestjs/common';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';

@Injectable()
export class LancheComboService {
  create(createLancheComboDto: CreateLancheComboDto) {
    return 'This action adds a new lancheCombo';
  }

  findAll() {
    return `This action returns all lancheCombo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lancheCombo`;
  }

  update(id: number, updateLancheComboDto: UpdateLancheComboDto) {
    return `This action updates a #${id} lancheCombo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lancheCombo`;
  }
}
