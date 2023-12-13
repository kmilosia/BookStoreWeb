import React, { useEffect } from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { FiMoon, FiSun } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuBookMarked } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { hideAll, showAccountModal, showSearchModal } from '../../store/navSlice'
import { showLoginMessage } from '../../store/loginPopupSlice'

function NavbarMenuIcons({toggleTheme, isDarkTheme}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuth} = useSelector((state)=>state.user)
  const {cart} = useSelector((state)=>state.cart)
  const handleClose = () => {
    dispatch(hideAll())
  }
  const handleWishlistButton = () => {
    if(isAuth){
      handleClose()
      navigate('/ulubione')
    }else{
      handleClose()
      dispatch(showLoginMessage({title: "Zaloguj się do swojego konta by mieć dostęp do listy życzeń!"}))
    }
  }
  return (
    <>
    <button onClick={() => {dispatch(showAccountModal())}} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Konto</span>
      </div>       
      <BiUser />
      </button>
    <button onClick={handleWishlistButton} className='navbar-menu-icon group'>
      <div className='tooltip-button'>
        <span>Ulubione</span>
      </div>
      <BiHeart />
    </button>
    <Link onClick={handleClose} to='/koszyk' className='navbar-menu-icon group'>
      {(cart && cart.length > 0) &&
      <div className='absolute flex -top-2 -right-2 rounded-full h-4 w-4 items-center justify-center text-[0.6rem] bg-purple-400 text-white'>
        <span>{cart.length}</span>
      </div>
      }
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
