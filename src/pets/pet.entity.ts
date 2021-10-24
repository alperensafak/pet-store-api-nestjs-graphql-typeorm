import {Field, Int, ObjectType} from '@nestjs/graphql';

export class Pet {
  @Field(type=>Int)
  id: number;
  @Field()
  name:string;
  @Field({nullable:true})
  type?:string;
}