export const resetPasswordValidate = (inputValues) => {
    let errors = {}
    if (!inputValues.password) {
      errors.password = "Wprowadź hasło!"
    }
    if (!inputValues.repeatPassword) {
        errors.repeatPassword = "Powtórz hasło!"
    }
    if(inputValues.password !== inputValues.repeatPassword){
        errors.submit = "Hasła nie mogą się od siebie różnić!"
    }
    return errors
  }
  