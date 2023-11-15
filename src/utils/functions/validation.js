export const loginValidation = (inputValues) => {
    let errors = {}
    if (inputValues.password === '' || inputValues.password === null) {
      errors.password = "Hasło nie może być puste"
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors.age = "Minimum age is 18";
    }
    return errors;
  };