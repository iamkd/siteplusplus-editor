import React from "react";
import { List, Datagrid, TextField, BooleanField } from "admin-on-rest";

export default props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <BooleanField name="canEdit" />
    </Datagrid>
  </List>
);
