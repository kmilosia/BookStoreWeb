import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userSlice'
import { scrollTop } from '../../utils/functions/scrollTop'

function Account() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    scrollTop()
  },[])
  const handleLogout = () => {
    dispatch(logout())
    navigate('/dostep/logowanie')
}
  const linkStyle = 'px-5 py-2 hover:font-semibold'
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col px-3 lg:px-10 pt-0 lg:pt-3 pb-5'>
        <h1 className='text-3xl my-4 font-medium mx-1 text-start hidden lg:inline-block'>Konto</h1>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_4fr] min-h-[80vh] gap-3 lg:gap-5'>
          <div className='flex flex-col py-3 mt-3 lg:mt-0 items-center lg:items-start rounded-md h-auto bg-white dark:bg-midnight-900'>
            <Link to='' className={linkStyle}>Dane użytkownika</Link>
            <Link to='adres' className={linkStyle}>Adres dostawy</Link>
            <Link to='zamowienia' className={linkStyle}>Zamówienia</Link>
            <Link to='wypozyczenia' className={linkStyle}>Wypożyczenia</Link>
            <Link to='/biblioteka' className={linkStyle}>Biblioteka</Link>
            <button onClick={handleLogout} className={`${linkStyle} text-red-500`}>Wyloguj się</button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Account

