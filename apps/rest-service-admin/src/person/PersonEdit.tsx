import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Document number" source="documentNumber" />
        <TextInput label="Document type" source="documentType" />
        <TextInput label="First name" source="firstName" />
        <TextInput label="Last name" source="lastName" />
        <TextInput label="Second last name" source="secondLastName" />
        <TextInput label="Second name" source="secondName" />
      </SimpleForm>
    </Edit>
  );
};
