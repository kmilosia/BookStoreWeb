export const loginValidate = (inputValues) => {
    let errors = {};
    if (inputValues.email === "" || inputValues.email === null) {
      errors.email = "Wprowadź swój email"
    }    if (inputValues.login === "" || inputValues.login === null) {
      errors.login = "Wprowadź swój email lub nazwę użytkownika"
    }
    if (inputValues.password === "" || inputValues.password === null) {
        errors.password = "Hasło jest obowiązkowe";
    }
    return errors
  }