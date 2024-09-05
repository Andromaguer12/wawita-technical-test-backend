import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Bus } from '../buses/buses.entity';

@ObjectType()
export class Route {
  @Field()
  id: string;

  @Field()
  origin: string;

  @Field()
  destiny: string;

  @Field(() => Float)
  price: number;

  @Field()
  startTime: Date;

  @Field()
  arriveTime: Date;

  @Field(() => String, { nullable: true })
  initialPoint?: string;

  @Field(() => String, { nullable: true })
  finalPoint?: string;

  @Field(() => [Bus], { nullable: true })
  buses?: Bus[];
}
