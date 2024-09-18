export type PersonCreateInput = {
  documentNumber: string;
  documentType: string;
  firstName: string;
  lastName: string;
  secondLastName?: string | null;
  secondName?: string | null;
};