import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sales {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  comment?: string;

  @Field()
  employeeId: number;
}
