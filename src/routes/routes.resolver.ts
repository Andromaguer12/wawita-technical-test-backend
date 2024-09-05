import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoutesService } from './routes.service';
import { Route } from './routes.entity';
import { CreateRouteInput, UpdateRouteInput } from './dto/route-input.dto';

@Resolver(() => Route)
export class RoutesResolver {
  constructor(private readonly routesService: RoutesService) {}

  @Query(() => [Route])
  async routes(): Promise<Route[]> {
    return this.routesService.findAll();
  }

  @Query(() => Route, { nullable: true })
  async getRouteById(@Args('id') id: string): Promise<Route | null> {
    return this.routesService.findById(id);
  }

  @Mutation(() => Route)
  async createRoute(@Args('data') data: CreateRouteInput): Promise<Route> {
    return this.routesService.create(data);
  }

  @Mutation(() => Route, { nullable: true })
  async updateRoute(
    @Args('id') id: string,
    @Args('data') data: UpdateRouteInput,
  ): Promise<Route | null> {
    return this.routesService.update(id, data);
  }

  @Mutation(() => Route, { nullable: true })
  async deleteRoute(@Args('id') id: string): Promise<Route | null> {
    return this.routesService.delete(id);
  }
}
