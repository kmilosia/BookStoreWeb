import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {checkTheme} from '../utils/theme'
import { Link } from 'react-router-dom'
import {GiSecretBook} from 'react-icons/gi'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {HiOutlineSearch} from 'react-icons/hi'
import {LuBookMarked} from 'react-icons/lu'
import {FiSun, FiMoon} from 'react-icons/fi'
import {BiShoppingBag, BiHeart, BiUser} from 'react-icons/bi'
import AccessModal from '../modals/AccessModal'
import PageTopScrollButton from '../components/buttons/PageTopScrollButton'

function Navbar() {
  const ref = useRef(null)
    const [isLogged, setIsLogged] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(checkTheme())
    const [isNavbarOpened, setIsNavbarOpened] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [navHeight, setNavHeight] = useState(0)
    
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
      <div className='grid grid-cols-2 lg:grid-cols-3 px-4 my-4 items-center'>    
        <Link to='/' className='flex flex-row items-center p-1 transition-all text-purple-600 hover:text-purple-700'>
          <GiSecretBook className='text-3xl mx-1'/>
          <h1 className='text-lg font-semibold font-delius self-end'>Spellarium</h1>
        </Link> 
      <div className='relative w-full hidden lg:inline-block justify-center'>
        <input className={`w-full rounded-md pl-4 pr-8 py-2 text-sm text-midnight-950 border-0 no-ring dark:text-midnight-50 ${isScrolled ? 'bg-midnight-150 dark:bg-midnight-950' : 'bg-midnight-100 dark:bg-midnight-900'}`} placeholder='Szukaj książek...' type='text'/>
        <Link to='/szukaj' className='absolute top-1/2 right-[10px] translate-y-[-50%] text-lg cursor-pointer text-midnight-400 hover:text-midnight-700 dark:hover:text-midnight-200'><HiOutlineSearch /></Link>
      </div>
      <div className='flex flex-row items-center justify-end'>
        <div className='hidden lg:flex flex-row items-center justify-end'>
        <button className='mx-2 text-xl text-midnight-950 transition-all dark:text-midnight-50 hover:text-orange-400 dark:hover:text-orange-500 relative group' onClick={toggleTheme}>
          <div className='tooltip-button'>
          {isDarkTheme ? <span>Tryb nocny</span> : <span>Tryb dzienny</span>}
          </div>
        {isDarkTheme ? <FiMoon /> : <FiSun />}
        </button>
        {isLogged ?
        <Link to='/konto' className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500 relative group'>
          <div className='tooltip-button'>
            <span>Konto</span>
          </div>         
          <BiUser />
        </Link>
        :
        <button onClick={() => {setIsModalOpen(!isModalOpen)}} className='mx-2 text-xl text-midnight-950 hover:text-purple-600  transition-all dark:text-midnight-50 relative group'>
          <div className='tooltip-button'>
            <span>Konto</span>
          </div>       
          <BiUser />
        </button>
        }
        <Link to='/ulubione' className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500 relative group'>
          <div className='tooltip-button'>
            <span>Ulubione</span>
          </div>
          <BiHeart />
        </Link>
        <Link to='/zamowienie/koszyk' className='mx-2 text-xl text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500 relative group'>
          <div className='tooltip-button'>
            <span>Koszyk</span>
          </div>
          <BiShoppingBag/>
        </Link>
        <Link to='/biblioteka' className='mx-2 text-xl text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500 relative group'>
          <div className='tooltip-button'>
            <span>Bilbioteka</span>
          </div>
          <LuBookMarked/>
        </Link>
        </div>
        <button className='mx-2 text-xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500' onClick={toggleNavbar}>
          {isNavbarOpened ? <AiOutlineClose/> : <AiOutlineMenu />}        
        </button>      
      </div>   
      </div>
      {isNavbarOpened &&
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-center w-full pt-2 pb-5'>
            <Link to='/'  className='mx-3 my-1 lg:my-0 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Strona Główna</Link>
            <Link to='/sklep' className='mx-3 my-1 lg:my-0 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Sklep</Link>
            <Link to='/wypozyczalnia'  className='mx-3 my-1 lg:my-0 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Wypożyczalnia</Link>
            <Link to='/ksiazki' className='mx-3 my-1 lg:my-0 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Książki</Link>
            <Link to='/e-booki' className='mx-3 my-1 lg:my-0 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>E-Booki</Link>
            <Link to='/wiadomosci' className='mx-3 text-sm my-1 lg:my-0 font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Wiadomości</Link>
            <Link to='/kontakt' className='mx-3 text-sm my-1 lg:my-0 font-semibold text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>Kontakt</Link>
            <div className='relative w-full justify-center inline-block lg:hidden px-2 my-1'>
              <input className={`w-full rounded-md pl-4 pr-8 py-2 text-sm transition-colors text-midnight-950 border-0 no-ring dark:text-midnight-50 ${isScrolled ? 'bg-midnight-150 dark:bg-midnight-950' : 'bg-midnight-100 dark:bg-midnight-800'}`} placeholder='Szukaj książek...' type='text'/>
              <span className='absolute top-1/2 right-[20px] translate-y-[-50%] text-lg cursor-pointer text-midnight-400 hover:text-midnight-700 dark:hover:text-midnight-200'><HiOutlineSearch /></span>
            </div>
            <div className='flex flex-row items-center justify-around lg:hidden w-full my-2'>
        <button className='mx-2 text-2xl text-midnight-950 transition-all dark:text-midnight-50 hover:text-orange-400 dark:hover:text-orange-500' onClick={toggleTheme}>
        {isDarkTheme ? <FiMoon /> : <FiSun />}
        </button>
        <Link to='/konto' className='mx-2 text-2xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiUser />
        </Link>
        <Link to='/ulubione' className='mx-2 text-2xl text-midnight-950  transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiHeart />
        </Link>
        <Link to='/koszyk' className='mx-2 text-2xl text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <BiShoppingBag/>
        </Link>
        <Link to='/biblioteka' className='mx-2 text-2xl text-midnight-950 transition-all hover:text-orange-500 dark:text-midnight-50 dark:hover:text-orange-500'>
          <LuBookMarked/>
        </Link>
        </div>
      </div>
      }
      {isModalOpen &&
      <AccessModal />
      }
    </nav>
    {isScrolled &&
    <PageTopScrollButton scrollToTop={scrollToTop}/>
    }
      </>
  )
}

export default Navbar
