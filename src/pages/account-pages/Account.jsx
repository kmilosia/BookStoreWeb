import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Account() {
  const linkStyle = 'border-b border-slate-200 dark:border-midnight-700 py-4 px-4 hover:bg-orange-400 hover:text-white'
  return (
    <div className='default-page-wrapper'>
      <div className='grid grid-cols-[1fr_4fr] min-h-[80vh] gap-5'>
        <div className='flex flex-col'>
          <div className='flex flex-col bg-slate-50 dark:bg-midnight-900 h-full'>
            <Link to='dane-osobowe' className={linkStyle}>Informacje personalne</Link>
            <Link to='zamowienia' className={linkStyle}>Moje zamówienia</Link>
            <Link to='wypozyczenia' className={linkStyle}>Moje wypożyczenia</Link>
            <Link to='biblioteka' className={linkStyle}>Moja biblioteka</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Account
