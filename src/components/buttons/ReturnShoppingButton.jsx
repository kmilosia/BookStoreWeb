import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function ReturnShoppingButton() {
  const navigate = useNavigate()
  return (
    <button onClick={() => {navigate('/sklep')}} className='flex flex-row items-center mt-5 w-max font-semibold underline-hover-dark'><BsArrowLeftShort className='text-xl'/><span className='text-sm'>Kontynuuj zakupy</span></button>
  )
}

export default ReturnShoppingButton
