import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  createdAt?: SortOrder;
  documentNumber?: SortOrder;
  documentType?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  secondLastName?: SortOrder;
  secondName?: SortOrder;
  updatedAt?: SortOrder;
};
