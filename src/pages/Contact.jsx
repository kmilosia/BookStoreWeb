import React, { useEffect } from 'react';
import {MdEmail} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {BsFillPersonFill,BsFillTelephoneFill} from 'react-icons/bs'
import librarycontact from '../assets/backgrounds/library-contact-page.jpg';
import ElementScrollButton from '../components/buttons/ElementScrollButton';
import ContactElement from '../components/page-elements/ContactElement';
import {scrollTop} from '../utils/functions/scrollTop'

function Contact() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
          <ElementScrollButton elementID='#contactform'/>
        </div>
        <img src={librarycontact} className='w-full h-96 object-cover object-center' />
        <div className='w-full h-96 bg-midnight-950/70 top-0 absolute z-0' />
        <div className='w-full h-96 flex flex-col items-center justify-center absolute top-0 z-10 px-5 lg:px-0'>
            <h1 className='info-page-h1'>Skontaktuj się z nami</h1>
            <p className='info-page-h1-p'>Jeśli chcesz dowiedzieć się więcej o swojej przesyłce lub masz jakiekolwiek inne pytania, skontaktuj się z nami.</p>
        </div>
      </div>
      <div className='py-12 lg:py-20 px-5 flex flex-col items-center'>
        <h2 id='contactform' className='info-page-h2 scroll-mt-40'>Formularz kontaktowy</h2>
        <p className='info-page-h2-p'>Masz do nas pytanie? Wyślij do nas zapytanie używając formularza kontaktowego a odezwiemy się do Ciebie w przeciągu doby!</p>
        <form className='my-3 w-full lg:w-3/4 flex flex-col'>
            <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2'>
                <div className='icons-form-input-container'>
                    <BsFillPersonFill />
                    <input type='text' placeholder='Twoje imię' name='name' className='icons-form-input'/>
                </div>
                <div className='icons-form-input-container'>
                    <BsFillTelephoneFill />
                    <input type='text' placeholder='Numer telefonu' name='phone number' className='icons-form-input'/>
                </div>
                <div className='icons-form-input-container'>
                    <MdEmail />
                    <input type='text' placeholder='Adres e-mail' name='email' className='icons-form-input'/>
                </div>
            </div>    
            <div className='flex w-full my-5 lg:my-2'>
            <div className='icons-form-input-container w-full items-start'>
                <TbMessageCircle2Filled className='my-[0.65rem]'/>
                <textarea rows={6} placeholder='Twoja wiadomość' name='message' className='icons-form-input w-full resize-none'/>
            </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-0 lg:my-1'>
              <div></div>
              <div></div>
              <div>
                <button className='purple-button w-full'>Wyślij</button>
              </div>
            </div>
        </form>
        <div className='default-page-container items-center my-5 divide-border-top'>
        <h1 className='info-page-h2'>Kontakt</h1>
        <p className='info-page-h2-p'>Jeżeli potrzebujesz skontaktować się z nami jak najszybciej, wybierz jedną z naszych form kontaktowych!</p>
        <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-10 lg:gap-5 mt-5'>
          <ContactElement imgURL='https://iili.io/JBf75xI.png' linkTitle='+48 777 888 999' title='Zadzwoń do nas' path='www.phone.com' />
          <ContactElement imgURL='https://iili.io/JBf7XxS.png' linkTitle='spellarium-info@gmail.com' title='Wyślij do nas e-mail' path='www.gmail.com' />
          <ContactElement imgURL='https://iili.io/JBf785x.png' linkTitle='+48 777 888 999' title='Napisz do nas na Whatsapp' path='www.whatsapp.com' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
