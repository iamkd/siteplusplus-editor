import React from "react";
import { jsonServerRestClient, Admin, Resource } from "admin-on-rest";

import { PostList, PostCreate, PostEdit } from "./containers/Post";
import { UserEdit, UserList, UserCreate } from "./containers/Users";

import { Editor } from "./containers/Editor";
import { MenuItemLink } from "admin-on-rest";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const authClient = (type, params) => {
  // type can be any of AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, and AUTH_CHECK
  // ...
  return Promise.resolve();
};

const App = () => (
  <Admin
    dashboard={Editor}
    authClient={authClient}
    title="Siteplusplus"
    restClient={jsonServerRestClient("http://localhost:3001")}
  >
    <Resource name="posts" title={"Posts"} list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" title={"Users"} list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;
