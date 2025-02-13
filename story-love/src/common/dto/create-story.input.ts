import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoryInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => String, { nullable: false })
  author: string;
}
