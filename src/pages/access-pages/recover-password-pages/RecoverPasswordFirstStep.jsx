import React from 'react'

function RecoverPasswordFirstStep() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='login-header'>Odzyskaj hasło</h1>
    <p>Wprowadź swoje dane, a wyślemy Ci kod do odzyskiwania hasła na Twój adres e-mail.</p>
    <form className='w-[20rem]'>
    <div className="relative my-1">
      <input type="text" id='username-input' className="floating-form-input peer" placeholder=" " />
      <label for='username-input' className="floating-form-label">Nazwa użytkownika lub e-mail</label>
    </div>
    <button className='purple-button w-full'>Dalej</button>
    </form>
  </div> 
  )
}

export default RecoverPasswordFirstStep
