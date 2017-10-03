import React from "react";
import {
  Edit,
  Create,
  DisabledInput,
  LongTextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from "admin-on-rest";

const PostTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

export const UserEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <BooleanInput source="canEdit" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <BooleanInput source="canEdit" />
    </SimpleForm>
  </Create>
);
