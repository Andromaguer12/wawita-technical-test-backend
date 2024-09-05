import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesResolver } from './routes.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RoutesService, RoutesResolver],
})
export class RoutesModule {}
