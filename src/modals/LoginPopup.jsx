import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { hideLoginMessage } from '../store/loginPopupSlice';

function LoginPopup() {
    const { showLoginMessage, loginMessageTitle } = useSelector((state) => state.loginPopup);
    const dispatch = useDispatch()
    const handleHidePopup = () => {
        dispatch(hideLoginMessage())
    }
  return (
    showLoginMessage && (
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-start lg:items-center'>
      <div className='w-full lg:w-1/2 2xl:w-1/3 h-max flex flex-col py-5 px-10 bg-white dark:bg-midnight-800 rounded-md'>
        <div className='flex justify-end my-2'>
            <button onClick={handleHidePopup} className='text-2xl'><IoClose/></button>
        </div>
        <h1 className='text-2xl font-medium text-center mb-2'>{loginMessageTitle}</h1>
        <div className='my-2 justify-center flex flex-col lg:flex-row'>
            <Link to='/dostep/logowanie' onClick={handleHidePopup} className='purple-button'>Przejdź do logowania</Link>
        </div>
      </div>
    </div>
    )
  )
}

export default LoginPopup
