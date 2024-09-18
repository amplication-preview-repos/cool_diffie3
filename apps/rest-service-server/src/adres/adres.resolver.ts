import * as graphql from "@nestjs/graphql";
import { GetAdresPersonInput } from "./GetAdresPersonInput";
import { GetAdresPersonOutput } from "./GetAdresPersonOutput";
import { AdresService } from "./adres.service";

export class AdresResolver {
  constructor(protected readonly service: AdresService) {}

  @graphql.Query(() => GetAdresPersonOutput)
  async GetAdresPerson(
    @graphql.Args()
    args: GetAdresPersonInput
  ): Promise<GetAdresPersonOutput> {
    return this.service.GetAdresPerson(args);
  }
}
