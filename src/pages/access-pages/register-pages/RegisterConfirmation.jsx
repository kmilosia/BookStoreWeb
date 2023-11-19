import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useEffect } from 'react'
import axiosClient from '../../../utils/api/axiosClient'

function RegisterConfirmation() {
  const [searchParams, setSearchParams] = useSearchParams()
  const userId = searchParams.get('userId')
  const token = searchParams.get('token')
  useEffect(() => {
    if(userId && token){
      const confirmEmail = async () => {
        const request = await axiosClient.get(`/Account/ConfirmEmail?userId=${userId}&token=${token}`)
        return request.data
      }
      confirmEmail()
    }
  },[])
  return (
    <div className='login-container'>
    <AccessIconElement />
    <h1 className='login-header text-center'>Konto zostało utworzone</h1>
    <p className='login-text'>Możesz teraz dokończyć rejestrację i wprowadzić swoje dane osobowe.</p>
    <div className='lg:w-[20rem] w-full flex flex-col'>
    <Link to='/dostep/rejestracja/dokoncz-rejestracje' className='purple-button w-full mb-1 mt-3'>Dokończ rejestrację</Link>
    <ReturnToLoginButton />
    </div>
  </div> 
  )
}

export default RegisterConfirmation
