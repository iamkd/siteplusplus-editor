import React from "react";
import {
  Edit,
  Create,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from "admin-on-rest";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);
