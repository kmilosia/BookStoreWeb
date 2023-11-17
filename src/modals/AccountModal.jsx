import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'

function AccountModal() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate(0)
    }
  return (
    <div className='fixed z-50 w-full lg:w-52 bottom-12 lg:top-20 lg:bottom-auto right-0 lg:right-32 px-10 py-7 lg:py-5 rounded-none lg:rounded-md flex
     flex-col lg:shadow-lg default-bg' >
        <Link to='/konto' className='dark:text-white py-1 font-medium hover:font-semibold'>Konto</Link>
        <Link to='/konto/zamowienia' className='dark:text-white py-1 font-medium hover:font-semibold'>Zamówienia</Link>
        <Link to='/konto/wypozyczenia' className='dark:text-white py-1 font-medium hover:font-semibold'>Wypożyczenia</Link>
        <button onClick={handleLogout} className='py-1 text-red-500 font-semibold w-max hover:font-bold'>Wyloguj się</button>
    </div>
  )
}

export default AccountModal
