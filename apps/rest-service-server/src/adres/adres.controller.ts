import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdresService } from "./adres.service";
import { GetAdresPersonInput } from "./GetAdresPersonInput";
import { GetAdresPersonOutput } from "./GetAdresPersonOutput";

@swagger.ApiTags("adres")
@common.Controller("adres")
export class AdresController {
  constructor(protected readonly service: AdresService) {}

  @common.Get("/adres-person")
  @swagger.ApiOkResponse({
    type: GetAdresPersonOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAdresPerson(
    @common.Param()
    params: GetAdresPersonInput
  ): Promise<GetAdresPersonOutput> {
        return this.service.GetAdresPerson(params);
      }
}
