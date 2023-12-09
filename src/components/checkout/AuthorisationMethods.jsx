import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setOrderAuth } from '../../store/checkoutSlice'

function AuthorisationMethods() {
  const dispatch = useDispatch()
  return (
        <div className='grid grid-cols-1 gap-5 mt-5'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-semibold'>Jestem już klientem sklepu</h1>
            <p className='font-light text-center'>Zaloguj się do swojego konta aby kontynuować zakupy</p>
            <Link to='/dostep/logowanie' className='purple-button w-full lg:w-2/3'>Zaloguj się</Link>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-semibold'>Nowy klient</h1>
            <p className='font-light text-center'>Kontynuuj jako gość lub zarejestruj się w naszym sklepie</p>
            <Link to='/dostep/rejestracja' className='purple-button w-full lg:w-2/3'>Zarejestruj się</Link>
            <button onClick={() => {dispatch(setOrderAuth({orderAuth: "guest"}))}} className='bordered-purple-button w-full lg:w-2/3'>Kontynuuj jako gość</button>
          </div>
        </div>
  )
}

export default AuthorisationMethods
