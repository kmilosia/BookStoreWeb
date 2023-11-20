import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetPasswordEmail } from '../../../store/userSlice'

function RecoverPasswordResetLink() {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const email = searchParams.get('email')
  const submitEmail = () => {
    let data = {
      email: email, 
    }
    console.log(data);
    dispatch(resetPasswordEmail(data))
  }
  return (
    <div className='login-container'>
    <AccessIconElement icon="mail" />
    <h1 className='login-header'>Sprawdź swój email</h1>
    <p className='login-text'>Wysłaliśmy Ci link resetujący hasło.</p>
    <div className='lg:w-[20rem] w-full flex flex-col'>
    <a href='https://g.co/kgs/bdAn8t' rel="noreferrer" target='_blank' className='purple-button w-full text-center my-2'>Przejdź do skrzynki</a>
    <div className='flex flex-row justify-center my-2 lg:my-1'>
      <p className='lg:text-xs text-base text-white'>Nie dostałeś kodu?</p>
      <button className='text-button-link mx-1'>Wyślij kod ponownie</button>
    </div>
    <ReturnToLoginButton />
    </div>
  </div> 
  )
}

export default RecoverPasswordResetLink
