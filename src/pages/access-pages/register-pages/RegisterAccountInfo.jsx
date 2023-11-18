import React from 'react'
import RegisterCarousel from '../../../components/carousel/RegisterCarousel'

function RegisterAccountInfo() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='login-header'>Uzupełnij swoje dane</h1>
    <form className='w-full'>
        <RegisterCarousel />
    </form>
</div>
  )
}

export default RegisterAccountInfo
