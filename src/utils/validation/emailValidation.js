export const emailValidate = (email) => {
    let errors = {}
    if (email === "" || email === null) {
      errors.email = "Wprowadź swój email"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Nieprawidłowy format"
    }
    return errors
  }
  