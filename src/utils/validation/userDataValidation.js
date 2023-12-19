export const userDataValidate = (data) => {
    let errors = {}
    if (!data.name || data.name === '') {
      errors.name = "Imię jest obowiązkowe!"
    }
    if (!data.surname || data.surname === '') {
        errors.surname = "Nazwisko jest obowiązkowe!"
    }
    if (!data.username || data.username === '') {
        errors.username = "Nazwa użytkownika jest obowiązkowa!"
    }
    if (!data.email || data.email === '') {
        errors.email = "Email jest obowiązkowy!"
    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Nieprawidłowy format email!"
    }
    if (!data.phoneNumber || data.phoneNumber === '') {
        errors.phoneNumber = "Numer telefonu jest obowiązkowy!"
    }
    return errors
}