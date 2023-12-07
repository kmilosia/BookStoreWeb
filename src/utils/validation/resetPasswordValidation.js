export const resetPasswordValidate = (inputValues) => {
    let errors = {}
    if (!inputValues.oldPassword) {
      errors.oldPassword = "Wprowadź obecne hasło!"
    }
    if (!inputValues.newPassword) {
      errors.newPassword = "Wprowadź hasło!"
    }else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}/.test(inputValues.newPassword)) {
      errors.newPassword = "Nieprawidłowy format - hasło powinno się składać z minimum 6 znaków, minimum jednego znaku specjalnego oraz jednej wielkiej litery.";
    } 
    if (!inputValues.confirmPassword) {
        errors.confirmPassword = "Powtórz hasło!"
    }
    if(inputValues.newPassword !== inputValues.confirmPassword){
        errors.submit = "Hasła nie mogą się od siebie różnić!"
    }
    return errors
  }
  