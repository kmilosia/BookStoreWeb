export const registerValidate = (inputValues) => {
    let errors = {};
    if (!inputValues.username) {
        errors.username = "Wprowadź swój email"
    }
    if (!inputValues.email) {
      errors.email = "Wprowadź swój email"
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Nieprawidłowy format"
    }
    if (!inputValues.password) {
        errors.password = "Hasło jest obowiązkowe";
    }else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}/.test(inputValues.password)) {
        errors.password = "Nieprawidłowy format - hasło powinno się składać z minimum 6 znaków, minimum jednego znaku specjalnego oraz jednej wielkiej litery.";
      } 
    if(!inputValues.conditions){
      errors.conditions = "Wymagane jest zaakceptowanie regulaminu sklepu!"
    }
    return errors
  }