import React, { useEffect, useState } from 'react'
import logoWhite from '../assets/logo-white-text.png'
import logoBlack from '../assets/logo-black-text.png'
import {checkTheme} from '../utils/theme'

function Navbar() {
    const [isDarkTheme, setIsDarkTheme] = useState(checkTheme())

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
          const newTheme = !prevTheme;
          localStorage.setItem('color-theme', newTheme ? 'dark' : 'light');
          return newTheme;
        })
      }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    },[isDarkTheme])
    
    return (
    <div className='flex flex-row px-4 py-2 bg-transparent sticky bg-red-600'>
      <img src={logoBlack} width={50} />

    </div>
  )
}

export default Navbar
