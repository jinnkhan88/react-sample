import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./styles.scss";
import { useFormik } from "formik";
import TextField from "components/TextField";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import Loading from "components/Loading";
import Button from "components/Button";

const validationSchema = yup.object({
  firstName: yup
    .string("Please provide your First Name")
    .trim("Please do not use whitespace only")
    .min(1, "First Name should be of minimum 1 character(s) length")

    .required("First name is required"),
  lastName: yup
    .string("Please provide your last name")
    .trim("Please do not use whitespace only")
    .min(1, "Last Name should be of minimum 1 character(s) length")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    }),
  terms: yup
    .boolean()
    .required("Please accept terms and conditions")
    .oneOf([true], "Please accept terms and conditions"),
});

const Signup = (props) => {
  const { isEmailError, signupAction, redirectToLogin } = props;

  useEffect(() => {
    if (isEmailError) {
      if (isEmailError.code === 4002) {
        formik.setFieldError("email", isEmailError.errors.email);
      }
    }
  }, [isEmailError]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signupAction(values);
    },
  });

  return (
    <Container fluid className="home-container">
      {props.isSignUpLoading ? <Loading /> : null}
      {!props.isSignUpLoading && (
        <div className="tw-w-full tw-max-w-xl">
          <form onSubmit={formik.handleSubmit} className="tw-w-full">
            <TextField
              label="First Name"
              labelFor="firstName"
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              label="Last Name"
              labelFor="lastName"
              id="lastName"
              name="lastName"
              type="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && formik.errors.lastName}
            />

            <TextField
              label="Email Address"
              labelFor="email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Password"
              labelFor="password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Confirm Password"
              labelFor="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <div className="tw-flex tw-flex-col tw-w-full tw-justify-items-start tw-my-2">
              <Form.Check
                type={`checkbox`}
                id={`default-checkbox`}
                label={`I agree to terms and conditions`}
                className="tw-flex tw-text-sm  tw-pl-2"
                checked={formik.values.terms}
                onChange={(e) => {
                  formik.setFieldValue("terms", e.target.checked);
                }}
              />
              {formik.touched.terms && formik.errors.terms ? (
                <div className="tw-w-full tw-text-left tw-text-red-500 tw-text-xs tw-pt-1">
                  {formik.errors.terms}
                </div>
              ) : null}
            </div>
            <Button type="submit" variant="primary" title="Register" />
            <div className="tw-text-base tw-my-2">
              <p>
                Already have an account?{" "}
                <span className="tw-cursor-pointer" onClick={redirectToLogin}>
                  Click here to Login
                </span>
              </p>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};

export default Signup;
