import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CourtsService {
  constructor(private prismaService: PrismaService) {}

  create(createCourtDto: CreateCourtDto) {
    return this.prismaService.court.create({ data: createCourtDto });
  }

  findAll() {
    return this.prismaService.court.findMany();
  }

  async findOne(id: number) {
    const courtFound = await this.prismaService.court.findUnique({
      where: { id },
    });
    if (!courtFound) throw new NotFoundException(`Court #${id} not found`);
    return courtFound;
  }

  async update(id: number, updateCourtDto: UpdateCourtDto) {
    const updatedCourt = await this.prismaService.court.update({
      where: { id },
      data: updateCourtDto,
    });
    if (!updatedCourt) throw new NotFoundException(`Court #${id} not found`);
    return updatedCourt;
  }

  remove(id: number) {
    const deletedCourt = this.prismaService.court.delete({ where: { id } });
    if (!deletedCourt) throw new NotFoundException(`Court #${id} not found`);
    return deletedCourt;
  }
}
