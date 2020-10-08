import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux/auth/actions";

import FormContainer from "../components/form/formContainer";
import Input from "../components/form/input";
import LoginSubtitle from "../components/form/loginSubtitle";
import Button from "../components/button/button";
import FormError from "../components/form/formError";

import loginValidtaionSchema from "../validation/loginValidtaionSchema";

import isEmptyObject from "../utils/isEmptyObject";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authReducer);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = loginValidtaionSchema(
      email,
      password,
      setFormError
    );

    if (isEmptyObject(validationErrors)) {
      try {
        await dispatch(login({ email, password }));
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <FormContainer label="LOG IN TO YOUR ACCOUNT" onSubmit={handleSubmit}>
      <Input
        label="Email address"
        value={email}
        setValue={setEmail}
        error={formError.email}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
        error={formError.password}
      />
      <Button block submit>Login</Button>
      {error && <FormError error={error} />}
      <LoginSubtitle />
    </FormContainer>
  );
};

export default LoginPage;
