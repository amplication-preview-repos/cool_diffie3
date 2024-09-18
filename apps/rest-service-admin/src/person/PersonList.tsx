import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"People"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Document number" source="documentNumber" />
        <TextField label="Document type" source="documentType" />
        <TextField label="First name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last name" source="lastName" />
        <TextField label="Second last name" source="secondLastName" />
        <TextField label="Second name" source="secondName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
