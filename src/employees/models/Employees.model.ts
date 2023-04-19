import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Sales } from '../../sales/models/Sales.model';

@ObjectType()
export class Employees {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Sales])
  sales?: Sales[];
}
