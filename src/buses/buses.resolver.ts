import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { BusesService } from './buses.service';
import { CreateBusInput, UpdateBusInput } from './dto/bus-input.dto';
import { Bus } from './buses.entity';

@Resolver()
export class BusesResolver {
  constructor(private busesService: BusesService) {}

  @Query(() => [Bus])
  async buses(): Promise<Bus[]> {
    return this.busesService.findAll();
  }

  @Query(() => Bus, { nullable: true })
  async getBusById(@Args('id') id: string): Promise<Bus | null> {
    return this.busesService.findById(id);
  }

  @Mutation(() => Bus)
  async createBus(@Args('data') data: CreateBusInput): Promise<Bus> {
    return this.busesService.create(data);
  }

  @Mutation(() => Bus)
  async updateBus(
    @Args('id') id: string,
    @Args('data') data: UpdateBusInput,
  ): Promise<Bus> {
    return this.busesService.update(id, data);
  }

  @Mutation(() => Bus)
  async deleteBus(@Args('id') id: string): Promise<Bus> {
    return this.busesService.delete(id);
  }
}
