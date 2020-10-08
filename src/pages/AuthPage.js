import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

import { auth } from "../redux/auth/actions";

import FormContainer from "../components/form/formContainer";
import Input from "../components/form/input";
import Selector from "../components/form/selector";
import Agreement from "../components/form/agreement";
import Button from "../components/button/button";
import FormError from "../components/form/formError";

import authValidtaionSchema from "../validation/authValidationSchema";

import isEmptyObject from "../utils/isEmptyObject";

const AuthPage = () => {
  const dataForSelector = ["London", "Moscow", "Rome"];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState(dataForSelector[0]);
  const [formError, setFormError] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authReducer);

  useEffect(() => {
    loadReCaptcha("6LeoT7gZAAAAAOhtHqSA7ZPhew9N2Gkz8i0fE0Px");
  }, []);

  const verifyCallback = (recaptchaToken) => {
    setRecaptchaToken(recaptchaToken);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = authValidtaionSchema(
      email,
      password,
      name,
      setFormError
    );

    if (isEmptyObject(validationErrors)) {
      try {
        await dispatch(
          auth({ email, password, name, recaptcha_response: recaptchaToken })
        );
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <FormContainer label="Create an account" onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={name}
        setValue={setName}
        error={formError.email}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
        error={formError.password}
      />
      <Input
        label="Email address"
        value={email}
        setValue={setEmail}
        error={formError.email}
      />
      <Selector
        label="Your city"
        value={city}
        setValue={setCity}
        data={dataForSelector}
      />
      <Button block submit>
        Create my account
      </Button>
      {error && <FormError error={error} />}
      <Agreement />
      <ReCaptcha
        sitekey="6LeoT7gZAAAAAOhtHqSA7ZPhew9N2Gkz8i0fE0Px"
        action="create_account"
        verifyCallback={verifyCallback}
      />
    </FormContainer>
  );
};

export default AuthPage;
