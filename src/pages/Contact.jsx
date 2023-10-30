import React from 'react';
import contact from '../assets/contact.png';
import {FaChevronDown} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {BsFillPersonFill,BsFillTelephoneFill} from 'react-icons/bs'
import librarycontact from '../assets/library-contact-page.jpg';
import librarycontactpage from '../assets/library-contact.jpg';

function Contact() {
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
        <button className=' bg-white rounded-3xl p-3 text-black text-xl hover:bg-sunrise-300'><FaChevronDown /></button>
        </div>
        <img src={librarycontact} className='w-full h-72 object-cover object-center' />
        <div className='w-full h-72 bg-midnight-950/90 top-0 absolute z-0' />
        <div className='w-full h-72 flex flex-col items-center justify-center absolute top-0 z-10'>
            <h1 className='font-semibold text-4xl text-white'>Skontaktuj się z nami</h1>
            <p className='my-2 w-1/2 text-center'>Jeśli chcesz dowiedzieć się więcej o swojej przesyłce lub masz jakiekolwiek inne pytania, skontaktuj się z nami.</p>
        </div>
      </div>
      <div className='py-10 px-5 flex flex-col items-center'>
        <h1 className='text-xl'>Formularz kontaktowy</h1>
        <p className='text-sm my-2 font-light'>Masz do nas pytanie? Wyślij do nas zapytanie używając formularza kontaktowego a odezwiemy się do Ciebie w przeciągu doby!</p>
        <form className='my-3 w-3/4 flex flex-col'>
            <div className='grid grid-cols-3 gap-2'>
                <div className='flex flex-row items-center border-[2px] bg-midnight-900 border-midnight-700 px-3 rounded-md focus-within:border-midnight-600'>
                    <BsFillPersonFill />
                    <input type='text' placeholder='Twoje imię' className='bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
                <div className='flex flex-row items-center border-[2px] bg-midnight-900 border-midnight-700 px-3 rounded-md focus-within:border-midnight-600'>
                    <BsFillTelephoneFill />
                    <input type='text' placeholder='Numer telefonu' className='bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
                <div className='flex flex-row items-center border-[2px] bg-midnight-900 border-midnight-700 px-3 rounded-md focus-within:border-midnight-600'>
                    <MdEmail />
                    <input type='text' placeholder='Adres email' className='bg-midnight-900 text-sm border-0 no-ring focus:border-0'/>
                </div>
            </div>    
            <div className='flex w-full my-2'>
            <div className='flex flex-row items-start border-[2px] bg-midnight-900 border-midnight-700 px-3 rounded-md w-full focus-within:border-midnight-600'>
                <TbMessageCircle2Filled className='my-[0.65rem]'/>
                <textarea type='text' rows={6} placeholder='Twoja wiadomość' className='bg-midnight-900 group w-full resize-none text-sm border-0 no-ring focus:border-0'/>
            </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
