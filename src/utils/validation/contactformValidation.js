export const contactformValidate = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = "Wprowadź swoje imię!"
      }
    if (!values.email) {
      errors.email = "Wprowadź swój email!"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Nieprawidłowy format email!"
    }
    if (!values.message) {
        errors.message = "Wiadomość nie może być pusta!"
      }
    return errors
  }