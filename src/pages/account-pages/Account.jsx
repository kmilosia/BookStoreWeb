import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Account() {
  const linkStyle = 'px-5 py-2 hover:font-semibold'
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col px-10 pt-3 pb-5'>
        <h1 className='text-3xl my-4 font-medium'>Konto</h1>
        <div className='grid grid-cols-[1fr_4fr] min-h-[80vh] gap-5'>
          <div className='flex flex-col py-3 rounded-md h-auto bg-white dark:bg-midnight-800'>
            <Link to='dane-osobowe' className={linkStyle}>Profil</Link>
            <Link to='zamowienia' className={linkStyle}>Zamówienia</Link>
            <Link to='wypozyczenia' className={linkStyle}>Wypożyczenia</Link>
            <Link to='biblioteka' className={linkStyle}>Biblioteka</Link>
            <Link to='biblioteka' className={`${linkStyle} text-red-500`}>Wyloguj się</Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Account

