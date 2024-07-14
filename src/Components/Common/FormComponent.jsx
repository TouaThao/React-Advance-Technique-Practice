import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser } from "../../Ulti/ApiService";
import { useUsers } from "../../Hooks/useUsers";
import "../../style/FormComponent.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number()
    .min(18, "You must be at least 18 years old")
    .required("Required"),
  website: Yup.string().url("Invalid URL").required("Required"),
});

const FormComponent = () => (
  <div className="form-container">
    <h1>Signup</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        age: "",
        website: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await createUser(values);
          alert("User created successfully!");
          resetForm();
        } catch (error) {
          console.error(error);
          alert("Failed to create user");
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Age</label>
            <Field type="number" name="age" />
            <ErrorMessage
              name="age"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Website</label>
            <Field type="url" name="website" />
            <ErrorMessage
              name="website"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
