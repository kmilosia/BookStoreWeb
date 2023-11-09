import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {checkTheme} from '../utils/theme'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {HiOutlineSearch} from 'react-icons/hi'
import {LuBookMarked} from 'react-icons/lu'
import {FiSun, FiMoon} from 'react-icons/fi'
import {BiShoppingBag, BiHeart, BiUser} from 'react-icons/bi'
import AccessModal from '../modals/AccessModal'
import SearchModal from '../modals/SearchModal'
import PageTopScrollButton from '../components/buttons/PageTopScrollButton'
import LogoButton from './buttons/LogoButton'
import NavbarMenuLinks from './navbar/NavbarMenuLinks'

function Navbar() {
    const navigate = useNavigate()
    const ref = useRef(null)
    const [isLogged, setIsLogged] = useState(false)
    const [isLoginModal, setIsLoginModal] = useState(false)
    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(checkTheme())
    const [isNavbarOpened, setIsNavbarOpened] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [navHeight, setNavHeight] = useState(0)
    
    const handleLoginModal = () => {
      if(isLogged){
        navigate('/konto')
      }else{
      if(isLoginModal){
        setIsLoginModal(false)
      }else{
        if(isSearchModal){
          setIsSearchModal(false)
        }
        setIsLoginModal(true)
      }
    }
    }
    const handleSearchModal = () => {
      if(isSearchModal){
        setIsSearchModal(false)
      }else{
        if(isLoginModal){
          setIsLoginModal(false)
        }
        setIsSearchModal(true)
      }
    }
    const changeNavbarBackground = () => {
      if(window.scrollY > 80){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    const scrollToTop = () => {
      window.scrollTo(0,0)
    }
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
          const newTheme = !prevTheme;
          localStorage.setItem('color-theme', newTheme ? 'dark' : 'light');
          return newTheme;
        })
      }
    const toggleNavbar = () => {
      setIsNavbarOpened(!isNavbarOpened)
    }
    useLayoutEffect(() => {
      setNavHeight(ref.current.clientHeight)
    },[navHeight])
    useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkTheme);
    },[isDarkTheme])
    window.addEventListener('scroll', changeNavbarBackground)
    return (
      <>
    <nav ref={ref} className={`flex flex-col sticky w-full py-1 px-2 lg:px-4 top-0 backdrop-blur-sm z-[100] lg:shadow-lg ${isScrolled ? 'scrolled-navbar-bg' : 'default-navbar-bg'}`}>

      <div className='grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-10 px-4 my-4 items-center'>    
       <LogoButton />
       <ul className='flex-row justify-center hidden lg:flex'>
        <NavbarMenuLinks />
       </ul>
      <div className='flex flex-row items-center justify-end'>
        <div className='hidden lg:flex flex-row items-center justify-end'>
        <button className='navbar-menu-icon group' onClick={toggleTheme}>
          <div className='tooltip-button'>
          {isDarkTheme ? <span>Tryb nocny</span> : <span>Tryb dzienny</span>}
          </div>
        {isDarkTheme ? <FiMoon /> : <FiSun />}
        </button>
        <button onClick={handleLoginModal} className='navbar-menu-icon group'>
          <div className='tooltip-button'>
            <span>Konto</span>
          </div>       
          <BiUser />
        </button>
        <Link to='/ulubione' className='navbar-menu-icon group'>
          <div className='tooltip-button'>
            <span>Ulubione</span>
          </div>
          <BiHeart />
        </Link>
        <Link to='/zamowienie/koszyk' className='navbar-menu-icon group'>
          <div className='tooltip-button'>
            <span>Koszyk</span>
          </div>
          <BiShoppingBag/>
        </Link>
        <Link to='/biblioteka' className='navbar-menu-icon group'>
          <div className='tooltip-button'>
            <span>Bilbioteka</span>
          </div>
          <LuBookMarked/>
        </Link>
        <button onClick={handleSearchModal} className='navbar-menu-icon group'>
          <div className='tooltip-button'>
            <span>Szukaj</span>
          </div>
          <HiOutlineSearch/>
        </button>
        </div>
        <button className='navbar-menu-icon inline-block lg:hidden' onClick={toggleNavbar}>
          {isNavbarOpened ? <AiOutlineClose/> : <AiOutlineMenu />}        
        </button>      
      </div>   
      </div>
      {isNavbarOpened &&
      <div className='flex flex-col w-full py-2'>
      <ul className='flex-col justify-center items-center flex lg:hidden'>
        <NavbarMenuLinks />
       </ul>
      </div>
      }
      {isLoginModal &&
      <AccessModal />
      }
      {isSearchModal &&
      <SearchModal />
      }
    </nav>
    <div className='fixed bottom-0 right-0 h-auto w-full bg-white z-[1000]'>
      <div className='flex flex-row w-full'>

      </div>
    </div>
    {isScrolled &&
    <PageTopScrollButton scrollToTop={scrollToTop}/>
    }
      </>
  )
}

export default Navbar
