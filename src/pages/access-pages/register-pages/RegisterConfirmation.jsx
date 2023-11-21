import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useEffect } from 'react'
import axiosClient from '../../../utils/api/axiosClient'

function RegisterConfirmation() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState(null)
  const userId = searchParams.get('userId')
  const token = searchParams.get('token')
  useEffect(() => {
    if(userId && token){
      const confirmEmail = async () => {
        try{
        const response = await axiosClient.get(`/Account/ConfirmEmail?userId=${userId}&token=${token}`)
        return response.data
        }catch(err){
          console.log(err.response.data.message)
        }
      }
      confirmEmail()
    }
  },[])
  return (
    <div className='login-container'>
    <AccessIconElement />
   <h1 className='login-header text-center'>Konto zostało utworzone</h1> //tutaj response.data.message
    <p className='login-text'>Możesz teraz przejść do logowania.</p>
    <div className='lg:w-[20rem] w-full flex flex-col'>
    <Link to='/dostep/logowanie' className='purple-button w-full mb-1 mt-3'>Zaloguj się</Link>
    </div>
  </div> 
  )
}

export default RegisterConfirmation
