import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MakeSaleInput {
  @Field()
  employeeId: number;

  @Field()
  comment?: string;
}