import React from "react";
import FormComponent from "../Common/FormComponent";
import Navigation from "../Layout/Navigation";
import UserList from "./UserList";

const FormPage = () => (
  <div>
    <Navigation />
    <h2>Signup Page</h2>
    <FormComponent />
    <UserList />
  </div>
);

export default FormPage;
