import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'
import { hideAll } from '../store/navSlice'

function AccountModal() {
    const {isAuth} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        handleClose()
        dispatch(logout())
        navigate(0)
    }
    const handleClose = () => {
      dispatch(hideAll())
    }
  return (
    <>
    {isAuth ?
     <div className='fixed z-[10000] w-full lg:w-48 bottom-12 lg:top-20 lg:bottom-auto right-0 lg:right-32 px-5 py-7 lg:py-5 rounded-none lg:rounded-md flex flex-col lg:shadow-lg default-bg justify-center items-center' >
      <Link to='/konto' onClick={handleClose} className='dark:text-white py-1 font-medium hover:font-semibold'>Konto</Link>
      <Link to='/konto/zamowienia' onClick={handleClose} className='dark:text-white py-1 font-medium hover:font-semibold'>Zamówienia</Link>
      <Link to='/konto/wypozyczenia' onClick={handleClose} className='dark:text-white py-1 font-medium hover:font-semibold'>Wypożyczenia</Link>
      <button onClick={handleLogout} className='py-1 text-red-500 font-semibold w-max hover:font-bold'>Wyloguj się</button>
    </div>
    :
    <div className='fixed z-[10000] w-full lg:w-max bottom-12 lg:top-20 lg:bottom-auto right-0 lg:right-32 px-5 py-7 lg:py-5 rounded-none lg:rounded-md flex flex-col items-center justify-center lg:shadow-lg default-bg' >
       <Link to='/dostep/logowanie' onClick={handleClose} className='rounded-purple-button'>Zaloguj się</Link>
       <p className='text-base lg:text-xs mt-2 dark:text-white'>Nie masz jeszcze konta?</p>
       <Link to='/dostep/rejestracja' onClick={handleClose} className='text-base lg:text-xs font-medium text-purple-500 underline-hover-purple'>Utwórz nowe konto</Link>
    </div>
    }
    </>
  )
}

export default AccountModal
