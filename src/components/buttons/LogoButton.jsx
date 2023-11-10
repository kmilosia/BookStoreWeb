import React from 'react'
import { GiSecretBook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function LogoButton() {
  return (
    <Link to='/' className='flex flex-row w-max items-center transition-color duration-300 text-purple-500 hover:text-purple-600'>
        <GiSecretBook className='text-3xl 2xl:4xl mx-1'/>
        <h1 className='text-lg 2xl:text-xl font-semibold font-delius self-end'>Spellarium</h1>
    </Link> 
  )
}

export default LogoButton
