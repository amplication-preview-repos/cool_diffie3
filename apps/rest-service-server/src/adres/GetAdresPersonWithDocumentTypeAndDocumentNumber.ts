import { Field } from "@nestjs/graphql";
import { EPersonDocumentType } from "./EPersonDocumentType";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class GetAdresPersonWithDocumentTypeAndDocumentNumber {
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

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    firstName!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    lastName!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    address?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    phoneNumber?: string;
}

export { GetAdresPersonWithDocumentTypeAndDocumentNumber as GetAdresPersonWithDocumentTypeAndDocumentNumber };