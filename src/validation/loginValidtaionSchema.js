export default function (email, password, setError) {
  const errors = {};

  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.email = "This field is required";
  } else if (!emailRegEx.test(email)) {
    errors.email = "Please enter a valid email";
  }

  if (!password) {
    errors.password = "This field is required";
  }

  setError(errors);

  return errors;
}
