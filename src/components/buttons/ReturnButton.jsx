import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function ReturnButton() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className='absolute top-5 left-5 text-white flex items-center underline-hover'>
        <FiArrowLeft className='text-xs'/>
        <p className='ml-1 text-xs'>Wróć</p>
    </button>
  )
}

export default ReturnButton
