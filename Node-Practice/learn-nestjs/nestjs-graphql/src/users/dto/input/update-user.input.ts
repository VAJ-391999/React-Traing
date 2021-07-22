import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field(() => Int)
    @IsNotEmpty()
    @IsOptional()
    age?: string;

    @Field({nullable: true})
    @IsOptional()
    isSubscribed?: boolean
} 