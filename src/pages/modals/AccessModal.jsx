import React from 'react'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

function AccessModal({setIsModal}) {
const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='fixed top-0 right-0 h-full w-full bg-black/50 flex justify-center items-center z-[1000]'>
    <div className='bg-white/10 dark:bg-midnight-600/10 flex flex-col items-center rounded-md backdrop-blur-md w-auto h-auto px-20 py-12 relative'>
    <button onClick={() => {setIsModal(false)}} className='absolute top-5 right-5 text-xl text-white hover:text-gray-200 flex items-center'><IoClose /></button>
    {isLogin ? <LoginModal setIsLogin={setIsLogin}/> : <RegisterModal setIsLogin={setIsLogin}/>}
    </div>
    </div>
  )
}

export default AccessModal
