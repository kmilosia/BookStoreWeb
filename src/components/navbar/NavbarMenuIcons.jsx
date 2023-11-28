import React from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { FiMoon, FiSun } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuBookMarked } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { hideAll, showAccountModal, showSearchModal } from '../../store/navSlice'

function NavbarMenuIcons({toggleTheme, isDarkTheme}) {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(hideAll())
  }
  return (
    <>
    <button onClick={() => {dispatch(showAccountModal())}} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Konto</span>
      </div>       
      <BiUser />
      </button>
    <Link onClick={handleClose} to='/ulubione' className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Ulubione</span>
      </div>
      <BiHeart />
    </Link>
    <Link onClick={handleClose} to='/koszyk' className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Koszyk</span>
      </div>
      <BiShoppingBag/>
    </Link>
    <Link onClick={handleClose} to='/biblioteka' className='navbar-menu-icon group'>
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
    <button onClick={() => {dispatch(showSearchModal())}} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Szukaj</span>
      </div>
      <HiOutlineSearch/>
    </button>
    </>
  )
}

export default NavbarMenuIcons
