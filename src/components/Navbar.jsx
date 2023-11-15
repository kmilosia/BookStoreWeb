import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {checkTheme} from '../utils/functions/theme'
import { useNavigate } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import PageTopScrollButton from '../components/buttons/PageTopScrollButton'
import LogoButton from './buttons/LogoButton'
import NavbarMenuLinks from './navbar/NavbarMenuLinks'
import NavbarMenuIcons from './navbar/NavbarMenuIcons'
import SearchModal from '../modals/SearchModal'
import AccessModal from '../modals/AccessModal'

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

    const changeNavbarBackground = () => {
      if(window.scrollY > 80){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    const handleIconButton = () => {
      if(isLoginModal){
        setIsLoginModal(false)
      }
      if(isSearchModal){
        setIsSearchModal(false)
      }
    }
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
    const toggleTheme = () => {
        handleIconButton()
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
    <nav ref={ref} className={`flex flex-col sticky w-full py-1 lg:py-2 px-2 lg:px-4 top-0 backdrop-blur-sm z-[100] lg:shadow-lg ${isScrolled ? 'scrolled-bg' : 'default-bg'}`}>
      <div className='grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-10 px-4 my-4 items-center'>    
       <LogoButton color="purple"/>
       <div className='flex-row justify-center hidden lg:flex'>
        <NavbarMenuLinks />
        </div>
      <div className='flex flex-row items-center justify-end'>   
      <div className='hidden lg:flex flex-row items-center justify-end'> 
        <NavbarMenuIcons handleLoginModal={handleLoginModal} handleSearchModal={handleSearchModal} handleIconButton={handleIconButton} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} isLogged={isLogged} />
      </div> 
        <button className='navbar-menu-icon inline-block lg:hidden' onClick={toggleNavbar}>
          <AiOutlineMenu />
        </button>      
      </div>   
      </div>
      <div className={`flex-col flex lg:hidden justify-center items-center h-max fixed top-0 right-0 w-screen z-[10000] default-bg px-5 py-5 transition-all duration-500
        ${isNavbarOpened ? 'top-0' : 'top-[-1000px]'}`}>
        <div className='w-full flex justify-end'>
          <button onClick={toggleNavbar} className='text-2xl px-2 text-midnight-950 dark:text-white'><AiOutlineClose /></button>
        </div>
        <div className='w-full h-full flex justify-center flex-col'>
        <NavbarMenuLinks toggleNavbar={toggleNavbar}/>
        </div>
       </div>
    </nav>
    {isLoginModal &&
      <AccessModal />
      }
      {isSearchModal &&
      <SearchModal />
      }
    <div className='fixed bottom-0 right-0 h-auto w-full bg-white dark:bg-midnight-900 z-[10000] lg:hidden'>
      <div className='flex flex-row w-full justify-between px-5 py-5'>
        <NavbarMenuIcons handleLoginModal={handleLoginModal} handleSearchModal={handleSearchModal} handleIconButton={handleIconButton} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} isLogged={isLogged} />
      </div>
    </div>
    {isScrolled &&
    <PageTopScrollButton />
    }
    </>
  )
}

export default Navbar
