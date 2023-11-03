import React from 'react';
import contact from '../assets/contact.png';
import {FaChevronDown} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {BsFillPersonFill,BsFillTelephoneFill} from 'react-icons/bs'
import librarycontact from '../assets/library-contact-page.jpg';
import call from '../assets/call.png';
import email from '../assets/mail.png';
import whatsapp from '../assets/whatsapp.png';


function Contact() {
  const contactlinkstyle = 'text-orange-400 font-semibold'
  const contactimagestyle = 'w-1/2 h-auto object-contain my-1'
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
        <a href='#contactform' className=' bg-midnight-900 dark:bg-white rounded-3xl p-3 text-white dark:text-black text-xl hover:bg-midnight-700 dark:hover:bg-sunrise-300'><FaChevronDown /></a>
        </div>
        <img src={librarycontact} className='w-full h-96 object-cover object-center' />
        <div className='w-full h-96 bg-midnight-950/70 top-0 absolute z-0' />
        <div className='w-full h-96 flex flex-col items-center justify-center absolute top-0 z-10 px-5 lg:px-0'>
            <h1 className='font-semibold text-3xl lg:text-4xl text-white text-center'>Skontaktuj się z nami</h1>
            <p className='my-2 w-full lg:w-1/2 text-center text-white'>Jeśli chcesz dowiedzieć się więcej o swojej przesyłce lub masz jakiekolwiek inne pytania, skontaktuj się z nami.</p>
        </div>
      </div>
      <div className='py-12 lg:py-20 px-5 flex flex-col items-center'>
        <h1 id='contactform' className='text-2xl lg:text-xl scroll-mt-40'>Formularz kontaktowy</h1>
        <p className='text-sm my-2 font-light text-center'>Masz do nas pytanie? Wyślij do nas zapytanie używając formularza kontaktowego a odezwiemy się do Ciebie w przeciągu doby!</p>
        <form className='my-3 w-full lg:w-3/4 flex flex-col'>
            <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2'>
                <div className='flex flex-row items-center border-[2px] bg-white border-sunrise-300 focus-within:border-sunrise-400 dark:bg-midnight-900 dark:border-midnight-700 px-3 rounded-md dark:focus-within:border-midnight-600'>
                    <BsFillPersonFill />
                    <input type='text' placeholder='Twoje imię' className='bg-white dark:bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
                <div className='flex flex-row items-center border-[2px] bg-white border-sunrise-300 focus-within:border-sunrise-400 dark:bg-midnight-900 dark:border-midnight-700 px-3 rounded-md dark:focus-within:border-midnight-600'>
                    <BsFillTelephoneFill />
                    <input type='text' placeholder='Numer telefonu' className='bg-white dark:bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
                <div className='flex flex-row items-center border-[2px] bg-white border-sunrise-300 focus-within:border-sunrise-400 dark:bg-midnight-900 dark:border-midnight-700 px-3 rounded-md dark:focus-within:border-midnight-600'>
                    <MdEmail />
                    <input type='text' placeholder='Adres email' className='bg-white dark:bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
            </div>    
            <div className='flex w-full my-5 lg:my-2'>
            <div className='flex flex-row items-start border-[2px] bg-white dark:bg-midnight-900 border-sunrise-300 focus-within:border-sunrise-400 dark:border-midnight-700 px-3 rounded-md w-full dark:focus-within:border-midnight-600'>
                <TbMessageCircle2Filled className='my-[0.65rem]'/>
                <textarea type='text' rows={6} placeholder='Twoja wiadomość' className='bg-white dark:bg-midnight-900 group w-full resize-none text-sm border-0 no-ring focus:border-0'/>
            </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-0 lg:my-1'>
              <div></div>
              <div></div>
              <div>
                <button className='bg-orange-400 hover:bg-orange-500 text-white flex items-center justify-center w-full py-2 rounded-md text-sm font-semibold'>Wyślij</button>
              </div>
            </div>
        </form>
        <div className='border-t-[1px] my-2 border-midnight-200 dark:border-midnight-800 w-full' />
        <div className='flex flex-col items-center my-5 py-0 lg:py-10 px-5'>
        <h1 className='text-2xl lg:text-xl'>Kontakt</h1>
        <p className='text-sm my-2 font-light text-center'>Jeżeli potrzebujesz skontaktować się z nami jak najszybciej, wybierz jedną z naszych form kontaktowych!</p>
        <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-10 lg:gap-5 mt-5'>
          <div className='flex flex-col items-center'>
            <img src={call} className={contactimagestyle} />
            <h1 className='my-1'>Zadzwoń do nas</h1>
            <a href='' className={contactlinkstyle}>+48 777 888 999</a>
          </div>
          <div className='flex flex-col items-center'>
            <img src={email} className={contactimagestyle} />
            <h1 className='my-1'>Wyślij do nas emaila</h1>
            <a href='www.gmail.com' className={contactlinkstyle}>spellarium-info@gmail.com</a>
          </div>
          <div className='flex flex-col items-center'>
            <img src={whatsapp} className={contactimagestyle} />
            <h1 className='my-1'>Napisz do nas na Whatsapp</h1>
            <a href='www.whatsapp.com' className={contactlinkstyle}>+48 777 888 900</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
