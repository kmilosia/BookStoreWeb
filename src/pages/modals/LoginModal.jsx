import React from 'react'
import { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'

function LoginModal({setIsLogin}) {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  return (
    <div className=' flex flex-col items-center w-full'>
    <h1 className='text-white text-3xl font-medium my-4 text-start w-full'>Zaloguj się</h1>
    <div className="relative my-1 w-[20rem]">
      <input type="text" id='username-input' className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-white/20 text-midnight-950 bg-white/10 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " />
      <label for='username-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Nazwa użytkownika</label>
    </div>
    <div className="relative my-1 w-[20rem]">
      <AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='absolute right-3 top-3.5 text-xl cursor-pointer text-white hover:text-orange-500'/>
      <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' className="block border-white/20 pl-2.5 pr-10 pb-2.5 pt-4 w-full text-sm text-midnight-950 bg-white/10 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " />
      <label for='password-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Hasło</label>
    </div>
    <div className="flex items-center justify-start w-full my-2">
      <input id="remember-checkbox" type="checkbox" value="" class="w-3 h-3 ml-1 text-orange-500 bg-gray-100 border-gray-300 rounded no-ring"/>
      <label for="remember-checkbox" className="ml-2 text-xs font-light my-2 text-white">Zapamiętaj mnie</label>
    </div>
    <button className='orange-button w-full'>Zaloguj się</button>
    <button className='text-xs text-orange-500 font-semibold my-2 w-full'>Zapomniałeś hasła?</button>
    <div className='flex flex-row my-1'>
      <p className='text-xs text-white'>Nie masz jeszcze konta?</p>
      <button onClick={() => {setIsLogin(false)}} className='text-xs text-orange-400 mx-1 hover:text-orange-500'>Zarejestruj się</button>
    </div>
    </div>
  )
}

export default LoginModal
