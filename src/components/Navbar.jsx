import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {checkTheme} from '../utils/theme'
import { Link } from 'react-router-dom'
import {GiSecretBook} from 'react-icons/gi'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {HiOutlineSearch} from 'react-icons/hi'
import {FiSun, FiMoon} from 'react-icons/fi'
import {BiShoppingBag, BiHeart, BiUser} from 'react-icons/bi'
import NavbarLink from './NavbarLink'
import { navbarLinks } from '../utils/objects/navbar-links'
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
    const handleHoverMenu = (key) => {
      setMenuCategory(key)
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
    <nav ref={ref} className={`flex flex-col sticky w-full py-1 px-4 top-0 backdrop-blur-sm z-[100] transition-colors ${isScrolled ? 'scrolled-navbar-bg' : 'default-navbar-bg'}`}>
      <div className='grid grid-cols-3 px-4 my-4 items-center'>    
        <Link className='flex flex-row items-center p-1 transition-all text-orange-600 hover:text-orange-700 dark:hover:text-orange-500'>
          <GiSecretBook className='text-3xl mx-1'/>
          <h1 className='text-lg font-semibold font-delius self-end'>Spellarium</h1>
        </Link> 
      <div className='relative w-full justify-center'>
        <input className={`w-full rounded-md pl-4 pr-8 py-2 text-sm transition-colors text-midnight-950  dark:text-midnight-50 ${isScrolled ? 'bg-midnight-150 dark:bg-midnight-950' : 'bg-midnight-100 dark:bg-midnight-900'}`} placeholder='Szukaj książek...' type='text'/>
        <span className='absolute top-1/2 right-[10px] translate-y-[-50%] text-lg cursor-pointer text-midnight-400 hover:text-midnight-700 dark:hover:text-midnight-200'><HiOutlineSearch /></span>
      </div>
      <div className='flex flex-row items-center justify-end'>
        <button className='mx-2 text-xl text-midnight-950 transition-all dark:text-midnight-50 hover:text-orange-600 dark:hover:text-orange-600' onClick={toggleTheme}>
        {isDarkTheme ? <FiMoon /> : <FiSun />}
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-600 dark:text-midnight-50 dark:hover:text-orange-600'>
          <BiUser />
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-600 dark:text-midnight-50 dark:hover:text-orange-600'>
          <BiHeart />
        </button>
        <button className='mx-2 text-xl text-midnight-950 transition-all hover:text-orange-600 dark:text-midnight-50 dark:hover:text-orange-600'>
          <BiShoppingBag/>
        </button>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-600 dark:text-midnight-50 dark:hover:text-orange-600' onClick={toggleNavbar}>
          {isNavbarOpened ? <AiOutlineClose/> : <AiOutlineMenu />}        
        </button>      
      </div>   
      </div>
      {isNavbarOpened &&
      <div className='flex flex-row items-center justify-center w-full pt-2 pb-5'>
        {navbarLinks.map(item=>(
          <NavbarLink key={item.id} id={item.id} path={item.path} title={item.title} setIsMenuExpanded={setIsMenuExpanded} menuCategory={menuCategory} setMenuCategory={setMenuCategory}/>
        ))}
      </div>
      }
    </nav>
    { isMenuExpanded &&
    <div className={`fixed w-full right-0 top-[${navHeight}px] z-[1000] transition-all bg-midnight-50 dark:bg-midnight-950`}>
      {menuCategory === 1 ? <BookMenu /> : menuCategory === 2 ? <p></p> : <p></p>
        
      }
      <h1>Hello</h1>
    </div>
    }
      </>
  )
}

export default Navbar
