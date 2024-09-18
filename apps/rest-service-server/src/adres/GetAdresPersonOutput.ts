import { ObjectType, Field } from "@nestjs/graphql";
import { IPerson } from "./IPerson";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GetAdresPersonOutputObject")
class GetAdresPersonOutput {
    @Field(() => IPerson)
    @ApiProperty({
        required: true,
        type: () => IPerson
    })
    @Type(() => IPerson)
    person!: IPerson;
}

export { GetAdresPersonOutput as GetAdresPersonOutput };