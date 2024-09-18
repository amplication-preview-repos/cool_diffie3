import * as graphql from "@nestjs/graphql";
import { AdresService } from "./adres.service";

export class AdresResolver {
  constructor(protected readonly service: AdresService) {}
}
