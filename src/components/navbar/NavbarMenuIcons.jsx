import React from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { FiMoon, FiSun } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuBookMarked } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function NavbarMenuIcons({toggleTheme, isDarkTheme, handleIconButton,handleLoginModal,handleSearchModal}) {
  return (
    <>
    <button onClick={handleLoginModal} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Konto</span>
      </div>       
      <BiUser />
      </button>
    <Link onClick={handleIconButton} to='/ulubione' className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Ulubione</span>
      </div>
      <BiHeart />
    </Link>
    <Link onClick={handleIconButton} to='/zamowienie/koszyk' className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Koszyk</span>
      </div>
      <BiShoppingBag/>
    </Link>
    <Link onClick={handleIconButton} to='/biblioteka' className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Bilbioteka</span>
      </div>
      <LuBookMarked/>
    </Link>
    <button className='navbar-menu-icon group' onClick={toggleTheme}>
      <div className='tooltip-button'>
      {isDarkTheme ? <span>Tryb nocny</span> : <span>Tryb dzienny</span>}
      </div>
      {isDarkTheme ? <FiMoon /> : <FiSun />}
    </button>
    <button onClick={handleSearchModal} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Szukaj</span>
      </div>
      <HiOutlineSearch/>
    </button>
    </>
  )
}

export default NavbarMenuIcons
