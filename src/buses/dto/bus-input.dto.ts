import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBusInput {
  @Field()
  model: string;

  @Field()
  plate: string;

  @Field()
  capacity: number;

  @Field({ nullable: true })
  routeId?: string;
}

@InputType()
export class UpdateBusInput {
  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  plate?: string;

  @Field({ nullable: true })
  capacity?: number;

  @Field({ nullable: true })
  routeId?: string; // ID de la ruta con la que se relaciona el bus
}
