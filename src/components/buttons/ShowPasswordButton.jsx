import React from 'react'
import { AiFillEye } from 'react-icons/ai'

function ShowPasswordButton({setIsHiddenPassword,isHiddenPassword}) {
  return (
    <AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='absolute right-3 top-3.5 text-xl cursor-pointer text-white hover:text-purple-500'/>
  )
}

export default ShowPasswordButton
