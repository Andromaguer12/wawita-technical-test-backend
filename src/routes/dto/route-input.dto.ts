import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRouteInput {
  @Field()
  origin: string;

  @Field()
  destiny: string;

  @Field()
  price: number;

  @Field()
  startTime: Date;

  @Field()
  arriveTime: Date;

  @Field(() => String, { nullable: true })
  initialPoint: string;

  @Field(() => String, { nullable: true })
  finalPoint: string;
}

@InputType()
export class UpdateRouteInput {
  @Field({ nullable: true })
  origin?: string;

  @Field({ nullable: true })
  destiny?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  arriveTime?: Date;

  @Field(() => String, { nullable: true })
  initialPoint?: string;

  @Field(() => String, { nullable: true })
  finalPoint?: string;
}
