import React, { useState } from 'react'
import forest from '../assets/forestlogin.jpg'
import {AiFillEye} from 'react-icons/ai'
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Login() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='relative bg-center bg-cover w-screen h-screen' style={{backgroundImage: `url(${forest})`}}>
      <div className='absolute w-full h-full top-0 right-0 flex flex-col justify-center items-center'>
        <div className='bg-white/20 flex flex-col items-center rounded-md backdrop-blur-md w-auto h-auto px-20 py-12'>
          {isLogin ?
          <div className=' flex flex-col items-center w-full'>
            <h1 className='text-white text-2xl font-medium my-4 text-start w-full'>Zaloguj się</h1>
            <div className="relative my-1 w-[20rem]">
              <input type="text" id='username-input' className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-white/20 text-midnight-950 bg-white/50 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
              <label for='username-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Nazwa użytkownika</label>
            </div>
            <div className="relative my-1 w-[20rem]">
              <AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='absolute right-3 top-3.5 text-xl cursor-pointer text-white hover:text-purple-500'/>
              <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' className="block border-white/20 pl-2.5 pr-10 pb-2.5 pt-4 w-full text-sm text-midnight-950 bg-white/50 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
              <label for='password-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Hasło</label>
            </div>
            <div className="flex items-center justify-start w-full my-2">
              <input id="remember-checkbox" type="checkbox" value="" class="w-3 h-3 ml-1 text-purple-500 bg-gray-100 border-gray-300 rounded no-ring"/>
              <label for="remember-checkbox" className="ml-2 text-xs font-light my-2 text-white">Zapamiętaj mnie</label>
            </div>
            <button className='w-[20rem] bg-purple-500 text-white py-2 my-2 text-sm rounded-md font-semibold hover:bg-purple-600'>Zaloguj się</button>
            <button className='text-xs text-purple-800 font-medium my-2 w-full'>Zapomniałeś hasła?</button>
            <div className='flex flex-row my-1'>
              <p className='text-xs'>Nie masz jeszcze konta?</p>
              <button onClick={() => {setIsLogin(false)}}  className='text-xs text-purple-700 font-semibold mx-1 hover:text-purple-800'>Zarejestruj się</button>
            </div>
          </div>
          :
          <div className=' flex flex-col items-center w-full'>
          <h1 className='text-white text-2xl font-medium my-4 text-start w-full'>Zarejestruj się</h1>
          <div className="relative my-1 w-[20rem]">
            <input type="text" id='email-input' className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-white/20 text-midnight-950 bg-white/50 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
            <label for='email-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">E-mail</label>
          </div>
          <div className="relative my-1 w-[20rem]">
            <input type="text" id='username-input' className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-white/20 text-midnight-950 bg-white/50 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
            <label for='username-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Nazwa użytkownika</label>
          </div>
          <div className="relative my-1 w-[20rem]">
            <AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='absolute right-3 top-3.5 text-xl cursor-pointer text-white hover:text-purple-500'/>
            <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' className="block border-white/20 pl-2.5 pr-10 pb-2.5 pt-4 w-full text-sm text-midnight-950 bg-white/50 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
            <label for='password-input' className="absolute text-sm text-midnight-600 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Hasło</label>
          </div>
          <button className='w-[20rem] bg-purple-500 text-white py-2 my-2 text-sm rounded-md font-semibold hover:bg-purple-600'>Zarejestruj się</button>
          <div className='flex flex-row my-1'>
            <p className='text-xs'>Posiadasz już konto?</p>
            <button onClick={() => {setIsLogin(true)}} className='text-xs text-purple-700 font-semibold mx-1 hover:text-purple-800'>Zaloguj się</button>
          </div>
        </div>
          }
        </div>
      </div>
      <div className='absolute top-2 left-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-md hover:bg-purple-600/20'>
        <Link to='/' className='text-white flex flex-row items-center'>
          <FiArrowLeft className='mx-1 text-lg'/>
          <p className='mx-1'>Wróć do strony głównej</p>
        </Link>
      </div>
    </div>
  )
}

export default Login
