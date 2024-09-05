import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateRouteInput } from './dto/route-input.dto';
import { Route } from './routes.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Route[]> {
    return this.prisma.route.findMany();
  }

  async findById(id: string): Promise<Route | null> {
    return this.prisma.route.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Prisma.RouteCreateInput): Promise<Route> {
    return this.prisma.route.create({
      data,
    });
  }

  async update(id: string, data: UpdateRouteInput): Promise<Route> {
    return this.prisma.route.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Route> {
    return this.prisma.route.delete({
      where: { id },
    });
  }
}
