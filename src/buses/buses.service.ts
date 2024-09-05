import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Bus } from './buses.entity';

@Injectable()
export class BusesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Bus[]> {
    return this.prisma.bus.findMany();
  }

  async findById(id: string): Promise<Bus | null> {
    return this.prisma.bus.findUnique({
      where: { id },
      include: { route: true },
    });
  }

  async create(data: Prisma.BusCreateInput): Promise<Bus> {
    return this.prisma.bus.create({
      data: {
        ...data,
        route: data.route
          ? {
              connect: data.route.connect,
              connectOrCreate: data.route.connectOrCreate,
              create: data.route.create,
            }
          : undefined,
      },
    });
  }

  async update(id: string, data: Prisma.BusUpdateInput): Promise<Bus> {
    return this.prisma.bus.update({
      where: { id },
      data: {
        ...data,
        route: data.route
          ? {
              connect: data.route.connect,
              connectOrCreate: data.route.connectOrCreate,
              create: data.route.create,
            }
          : undefined,
      },
    });
  }

  async delete(id: string): Promise<Bus> {
    return this.prisma.bus.delete({
      where: { id },
    });
  }
}
