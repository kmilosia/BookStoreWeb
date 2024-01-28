export const guestValidate = (values) => {
    let errors = {}
    if (!values.email) {
      errors.email = "Wprowadź swój email!"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Nieprawidłowy format email!"
    }
    if(!values.name){
        errors.name = "Wprowadź swoje imię!"
    }
    if(!values.surname){
        errors.surname = "Wprowadź swoje nazwisko!"
    }
    return errors
  }