import { ArgsType, Field } from "@nestjs/graphql";
import { EPersonDocumentType } from "./EPersonDocumentType";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class GetAdresPersonInput {
    @Field(() => EPersonDocumentType)
    @ApiProperty({
        required: true,
        enum: EPersonDocumentType
    })
    documentType!: "CC" | "CE" | "TI" | "PA" | "RC";

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    documentNumber!: string;
}

export { GetAdresPersonInput as GetAdresPersonInput };