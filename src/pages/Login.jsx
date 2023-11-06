import React, { useState } from 'react'
import forest from '../assets/forestlogin.jpg'
import {AiFillEye} from 'react-icons/ai'
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import login from '../assets/books-login.png'

function Login() {
  const navigate = useNavigate()
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  return (
    <div className='bg-center flex items-center justify-center bg-cover w-screen h-screen' style={{backgroundImage: `url(${forest})`}}>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='bg-white/20 flex flex-col rounded-md backdrop-blur-md w-auto h-auto px-12 py-12 relative'>   
        <button onClick={() => navigate(-1)} className='absolute top-5 left-5 text-white flex items-center underline-hover'>
          <FiArrowLeft className='text-xs'/>
          <p className='ml-1 text-xs'>Wróć</p>
        </button>   
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white text-3xl font-medium my-4 text-start'>Zaloguj się</h1>
            <form className='w-[20rem]'>
            <div className="relative my-1">
              <input type="text" id='username-input' className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-white/20 text-white bg-white/20 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
              <label for='username-input' className="absolute text-sm text-midnight-200 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Nazwa użytkownika</label>
            </div>
            <div className="relative my-1">
              <AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='absolute right-3 top-3.5 text-xl cursor-pointer text-white hover:text-purple-500'/>
              <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' className="block border-white/20 pl-2.5 pr-10 pb-2.5 pt-4 w-full text-sm text-white bg-white/20 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " />
              <label for='password-input' className="absolute text-sm text-midnight-200 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1">Hasło</label>
            </div>
            <div className="flex items-center justify-start w-full my-2">
              <input id="remember-checkbox" type="checkbox" value="" class="w-3 h-3 ml-1 text-purple-500 bg-gray-100 border-gray-300 rounded no-ring"/>
              <label for="remember-checkbox" className="ml-2 text-xs font-light my-2 text-white">Zapamiętaj mnie</label>
            </div>
            <button className='w-full bg-purple-500 text-white py-2 my-2 text-sm rounded-md font-semibold hover:bg-purple-600'>Zaloguj się</button>
            </form>
            <button className='text-xs text-purple-500 font-semibold my-2 w-full'>Zapomniałeś hasła?</button>
            <div className='flex flex-row justify-center my-1'>
              <p className='text-xs text-white'>Nie masz jeszcze konta?</p>
              <Link to='/rejestracja' className='text-xs text-purple-600 font-semibold mx-1'>Zarejestruj się</Link>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  )
}

export default Login
