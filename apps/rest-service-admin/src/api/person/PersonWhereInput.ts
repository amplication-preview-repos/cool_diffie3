import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonWhereInput = {
  documentNumber?: StringFilter;
  documentType?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  secondLastName?: StringNullableFilter;
  secondName?: StringNullableFilter;
};
