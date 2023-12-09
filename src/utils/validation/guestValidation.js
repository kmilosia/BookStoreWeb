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
    if(!values.street){
        errors.street = "Wprowadź ulicę!"
    }
    if(!values.streetNumber){
        errors.streetNumber = "Wprowadź numer ulicy!"
    }
    if(!values.houseNumber){
        errors.houseNumber = "Wprowadź numer domu!"
    }
    if(!values.postcode){
        errors.postcode = "Wprowadź kod pocztowy!"
    }
    return errors
  }