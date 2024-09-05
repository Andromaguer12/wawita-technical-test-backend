import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Route } from 'src/routes/routes.entity';

@ObjectType()
export class Bus {
  @Field(() => ID)
  id: string;

  @Field()
  model: string;

  @Field()
  plate: string;

  @Field(() => Int)
  capacity: number;

  @Field({ nullable: true })
  routeId?: string;

  @Field(() => Route, { nullable: true })
  route?: Route;
}
