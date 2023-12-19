import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userSlice'
import { CgMenuLeftAlt } from "react-icons/cg";

function Account() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/dostep/logowanie')
}
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col px-3 lg:px-10 pt-0 lg:pt-3 pb-5'>
        <h1 className='text-3xl my-4 font-medium mx-1 text-start hidden lg:inline-block cursor-default'>Konto</h1>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_4fr] min-h-[80vh] gap-3 lg:gap-5'>
          <div className='flex flex-col mt-2 lg:mt-0'>
            <button onClick={toggleMenu} className='flex lg:hidden items-center bg-white dark:bg-midnight-900 px-5 py-2 w-max rounded-md border dark:border-midnight-700'><CgMenuLeftAlt /><span className='mx-2'>Menu</span></button>
            <div className={`lg:flex flex-col py-3 mt-3 lg:mt-0 items-center lg:items-start rounded-md h-auto bg-white dark:bg-midnight-900 ${isMenuOpen ? 'flex' : 'hidden'}`}>
              <Link to='' className='px-5 py-2 hover:font-semibold'>Dane użytkownika</Link>
              <Link to='test' className='px-5 py-2 hover:font-semibold'>Dane test</Link>
              <Link to='adres' className='px-5 py-2 hover:font-semibold'>Adresy użytkownika</Link>
              <Link to='zamowienia' className='px-5 py-2 hover:font-semibold'>Zamówienia</Link>
              <Link to='wypozyczenia' className='px-5 py-2 hover:font-semibold'>Wypożyczenia</Link>
              <Link to='/biblioteka' className='px-5 py-2 hover:font-semibold'>Biblioteka</Link>
              <button onClick={handleLogout} className='px-5 py-2 hover:font-semibold text-red-500'>Wyloguj się</button>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Account

