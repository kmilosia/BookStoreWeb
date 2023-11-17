export const loginValidate = (inputValues) => {
    let errors = {};
    if (!inputValues.email) {
      errors.email = "Wprowadź swój email"
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Nieprawidłowy format"
    }
    if (!inputValues.password) {
        errors.password = "Hasło jest obowiązkowe";
    }
    return errors
  }