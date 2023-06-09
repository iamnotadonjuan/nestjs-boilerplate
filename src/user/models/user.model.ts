import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => String)
  username: string;
}
