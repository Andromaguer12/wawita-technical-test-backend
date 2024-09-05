import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesResolver } from './buses.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BusesService, BusesResolver],
})
export class BusesModule {}
