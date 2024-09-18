import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdresService } from "./adres.service";

@swagger.ApiTags("adres")
@common.Controller("adres")
export class AdresController {
  constructor(protected readonly service: AdresService) {}
}
