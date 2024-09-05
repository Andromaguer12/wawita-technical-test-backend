import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesService } from './routes/routes.service';
import { RoutesResolver } from './routes/routes.resolver';
import { PrismaService } from './prisma/prisma.service';
import { BusesModule } from './buses/buses.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    BusesModule,
    RoutesModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, RoutesService, RoutesResolver, PrismaService],
})
export class AppModule {}
