import { Module } from "@nestjs/common";
import { AdresService } from "./adres.service";
import { AdresController } from "./adres.controller";
import { AdresResolver } from "./adres.resolver";

@Module({
  controllers: [AdresController],
  providers: [AdresService, AdresResolver],
  exports: [AdresService],
})
export class AdresModule {}
