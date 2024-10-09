import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const userFound = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!userFound) throw new NotFoundException(`User #${id} not found`);
    return userFound;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
    if (!userFound) throw new NotFoundException(`User #${id} not found`);
    return userFound;
  }

  async remove(id: number) {
    const userFound = await this.prismaService.user.delete({
      where: {id},
    });
    if (!userFound) throw new NotFoundException(`User #${id} not found`);
    return userFound;
  }
}
