import { Injectable } from "@nestjs/common";
import { GetAdresPersonInput } from "./GetAdresPersonInput";
import { GetAdresPersonOutput } from "./GetAdresPersonOutput";

@Injectable()
export class AdresService {
  constructor() {}
  async GetAdresPerson(args: GetAdresPersonInput): Promise<GetAdresPersonOutput> {
    throw new Error("Not implemented");
  }
}
