import { Field, Float, InputType, Int } from "type-graphql";

@InputType()
export class HackerInputCreate {
  @Field({ nullable: false })
  fullName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: true })
  github: string;

  @Field({ nullable: true })
  linkedIn: string;

  @Field(() => Int, { nullable: false })
  hackathonAttended: number;

  @Field({ nullable: false })
  programmingExp: string;

  @Field({ nullable: false })
  academics: string;

  @Field({ nullable: false })
  major: string;

  @Field(() => Float, { nullable: false })
  phoneNumber: number;

  @Field({ nullable: false })
  disUserName: string;
}
