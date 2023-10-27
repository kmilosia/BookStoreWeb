import React from 'react'
import blikLogo from '../assets/logos/blik.png'
import mastercardLogo from '../assets/logos/mastercard.png'
import paypoLogo from '../assets/logos/paypo.png'
import przelewy24Logo from '../assets/logos/przelewy24.png'
import stripeLogo from '../assets/logos/stripe.png'
import visaLogo from '../assets/logos/visa.png'
import { Link } from 'react-router-dom'
import googlePlayLogo from '../assets/logos/google-play-badge.png'
import appStoreLogo from '../assets/logos/app-badge.svg'

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center w-full transition-all bg-midnight-50 dark:bg-midnight-950'>
      <div className='flex flex-col items-center justify-center w-full py-20 md:py-12 px-2 md:px-0 transition-all footer-bg footer-bg-light dark:footer-bg-dark'>
        <h1 className='text-2xl default-text my-4'>Zapisz się do newslettera</h1>
        <div className='px-5 md:px-0 w-full flex flex-col items-center justify-center mb-4'>
        <input type='text' placeholder='Twój adres e-mail..' className='w-full md:w-1/2 lg:w-1/3 border-0 no-ring rounded-md my-2 px-3 py-2'/>
        <button className='w-full md:w-1/2 lg:w-1/3 px-3 py-2 my-2 rounded-md text-midnight-50 bg-orange-400 hover:bg-orange-500'>Zapisz się</button>
        </div>
      </div>
      <div className='w-full flex flex-col px-2 md:px-10 lg:px-16 pb-10 pt-5'>      
      <div className='w-full footer-layout-sm md:footer-layout-md lg:footer-layout-lg default-text py-0 md:py-10'>
        <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
            <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Sklep</h2>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Książki</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>E-Booki</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Fantastyka</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Dla Dzieci</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Fikcja</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Dla Młodzieży</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Thrillery</Link>
        </div>          
        <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
        <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Informacje</h2>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>O Nas</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Blog</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Pomoc</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Kontakt</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Cookies</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Polityka Prywatności</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Zasady Użytkowania</Link>
        </div>
        <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
        <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Konto</h2>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Moje Konto</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Zamówienia</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Dostawa</Link>
            <Link className='my-1 text-xl md:text-base hover:text-orange-500'>Płatności</Link>
        </div>
        <div className='flex flex-col items-center md:items-start'>
            <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Social Media</h2>
                <div className='flex flex-row'>
                    <Link className='my-1 mr-3 text-2xl md:text-lg hover:text-orange-500'><i className="fa-brands fa-tiktok"></i></Link>
                    <Link className='my-1 mr-3 text-2xl md:text-lg hover:text-orange-500'><i className="fa-brands fa-instagram"></i></Link>
                    <Link className='my-1 mr-3 text-2xl md:text-lg hover:text-orange-500'><i className="fa-brands fa-facebook"></i></Link>
                    <Link className='my-1 mr-3 text-2xl md:text-lg hover:text-orange-500'><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link className='my-1 mr-3 text-2xl md:text-lg hover:text-orange-500'><i className="fa-brands fa-pinterest"></i></Link>
                </div>
            </div>
            <div className='flex flex-col py-2 md:py-5 items-center md:items-start'>
            <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Aplikacje Mobilne</h2>
                <div className='flex flex-col lg:flex-row items-center md:items-start lg:items-center my-2 md:my-0'>
                    <a href='https://www.apple.com/app-store/' target='_blank' className='my-1 h-9 opacity-90 hover:opacity-100'><img className='h-full' src={appStoreLogo}></img></a>
                    <a href='https://play.google.com/' target='_blank' className='my-1 opacity-90 h-12 mx-0 lg:mx-2 hover:opacity-100'><img className='h-full' src={googlePlayLogo}></img></a>
                </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-start lg:items-center w-full pt-10 border-t-[1px] border-midnight-200 dark:border-midnight-800'>
        <div className='flex flex-row flex-wrap justify-center md:justify-normal'>
            <img src={blikLogo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0 '/>
            <img src={przelewy24Logo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0'/>
            <img src={paypoLogo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0'/>
            <img src={stripeLogo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0'/>
            <img src={visaLogo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0'/>
            <img src={mastercardLogo} className='h-10 md:h-7 w-auto mr-4 my-2 lg:my-0'/>        
        </div>
        <p className='text-sm mt-5 md:mt-0 text-center md:text-start text-midnight-700 dark:text-midnight-500 cursor-default'>&copy; 2023 Spellarium Sp. z.o.o. Wszystkie prawa zastrzeżone</p> 
      </div>
      </div>
    </footer>
  )
}

export default Footer
