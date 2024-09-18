import { registerEnumType } from "@nestjs/graphql";

export enum EPersonDocumentType {
    CedulaDeCiudadania = "CC",
    CedulaDeExtranjeria = "CE",
    TarjetaDeIdentidad = "TI",
    Pasaporte = "PA",
    RegistroCivil = "RC"
}

registerEnumType(EPersonDocumentType, {
    name: "EPersonDocumentType",
  });