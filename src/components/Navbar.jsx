import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {checkTheme} from '../utils/theme'
import { Link } from 'react-router-dom'
import {GiSecretBook} from 'react-icons/gi'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiSun, FiMoon} from 'react-icons/fi'
import {BiShoppingBag, BiHeart, BiUser} from 'react-icons/bi'
import BookMenu from './BookMenu'

function Navbar() {
    const ref = useRef(null)
    const [isDarkTheme, setIsDarkTheme] = useState(checkTheme())
    const [isNavbarOpened, setIsNavbarOpened] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    const [menuCategory, setMenuCategory] = useState(null)
    const [navHeight, setNavHeight] = useState(0)
    
    const changeNavbarBackground = () => {
      if(window.scrollY > 80){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
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
    const handleHoverOverMenu = (key) => {
      setMenuCategory(key)
      setIsMenuExpanded(true)
    }
    const handleHoverLeaveMenu = () => {
      setIsMenuExpanded(false)
      setMenuCategory(null)
    }
    useLayoutEffect(() => {
      setNavHeight(ref.current.clientHeight)
      console.log(navHeight);
    },[navHeight])
    useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkTheme);
    },[isDarkTheme])
    window.addEventListener('scroll', changeNavbarBackground)
    return (
      <>
    <nav ref={ref} className={`flex flex-col sticky w-full py-1 px-4 top-0 backdrop-blur-sm z-[100] shadow-lg transition-colors ${isScrolled ? 'scrolled-navbar-bg' : 'default-navbar-bg'}`}>
      <div className='grid grid-cols-3 px-4 my-4 items-center'>    
        <Link to='/' className='flex flex-row items-center p-1 transition-all text-orange-400 hover:text-orange-500'>
          <GiSecretBook className='text-3xl mx-1'/>
          <h1 className='text-lg font-semibold font-delius self-end'>Spellarium</h1>
        </Link> 
      <div className='relative w-full justify-center'>
        <input className={`w-full rounded-md pl-4 pr-8 py-2 text-sm transition-colors text-midnight-950 border-0 no-ring dark:text-midnight-50 ${isScrolled ? 'bg-midnight-150 dark:bg-midnight-950' : 'bg-midnight-100 dark:bg-midnight-900'}`} placeholder='Szukaj książek...' type='text'/>
        <span className='absolute top-1/2 right-[10px] translate-y-[-50%] text-lg cursor-pointer text-midnight-400 hover:text-midnight-700 dark:hover:text-midnight-200'><HiOutlineSearch /></span>
      </div>
      <div className='flex flex-row items-center justify-end'>
        <button className='mx-2 text-xl text-midnight-950 transition-all dark:text-midnight-50 hover:text-orange-400 dark:hover:text-orange-500' onClick={toggleTheme}>
        {isDarkTheme ? <FiMoon /> : <FiSun />}
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiUser />
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiHeart />
        </button>
        <button className='mx-2 text-xl text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiShoppingBag/>
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500' onClick={toggleNavbar}>
          {isNavbarOpened ? <AiOutlineClose/> : <AiOutlineMenu />}        
        </button>      
      </div>   
      </div>
      {isNavbarOpened &&
      <div className='flex flex-row items-center justify-center w-full pt-2 pb-5'>
            <Link to='/'  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Strona Główna</Link>
            <Link to='/sklep' onMouseOver={() => handleHoverOverMenu("store")} onMouseLeave={() => {setIsMenuExpanded(false); setMenuCategory(null);}}  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Sklep</Link>
            <Link to='/ksiazki' onMouseOver={() => handleHoverOverMenu("books")} onMouseLeave={() => {setIsMenuExpanded(false); setMenuCategory(null);}} className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Książki</Link>
            <Link to='/e-booki' onMouseOver={() => handleHoverOverMenu("ebooks")} onMouseLeave={() => {setIsMenuExpanded(false); setMenuCategory(null);}} className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>E-Booki</Link>
            <Link to='/blog'  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Blog</Link>
            <Link to='/wiadomosci'  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Wiadomości</Link>
            <Link to='/kontakt'  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Kontakt</Link>
      </div>
      }
    </nav>
    { isMenuExpanded &&
    <div className={`fixed w-full right-0 top-[${navHeight}px] z-[1000] transition-all bg-midnight-50 dark:bg-midnight-950`}>
      {menuCategory === 'store' ?
      <BookMenu /> 
      : menuCategory === 'books' ?
      <p></p>
      : menuCategory === 'ebooks' ?
      <p></p>
      : <></>
      }
      <h1>Hello</h1>
    </div>
    }
      </>
  )
}

export default Navbar
