import React, { useEffect, useState } from 'react';
import {MdEmail} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {BsFillPersonFill} from 'react-icons/bs'
import ElementScrollButton from '../components/buttons/ElementScrollButton';
import SubmitLoadingButton from '../components/buttons/SubmitLoadingButton';
import ContactElement from '../components/page-elements/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import {contactformValidate} from '../utils/validation/contactformValidation'
import { resetState, sendContactMessage } from '../store/userSlice';
import { showMessage } from '../store/messageSlice';

function Contact() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const {loading,error,success} = useSelector((state) => state.user)
  const [values, setValues] = useState({
    clientName: '',
    email: '',
    content: '',
  })
  const clearForm = () => {
    setValues((prevValues) => {
      const clearedValues = Object.fromEntries(Object.keys(prevValues).map(key => [key, '']))
      return clearedValues
    })
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(contactformValidate(values))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    dispatch(sendContactMessage(values))
    clearForm()
  }
  useEffect(() => {
    if(success){
      clearForm()
      dispatch(showMessage({title: 'Formularz kontaktowy został pomyślnie wysłany!'}))
      dispatch(resetState())
    }
  },[success])
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit()
    }
  }, [errors])
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
          <ElementScrollButton elementID='#contactform'/>
        </div>
        <img src='https://iili.io/JCJNZXI.jpg' alt='Library' className='w-full h-48 lg:h-96 object-cover object-center' />
        <div className='w-full h-48 lg:h-96 bg-midnight-950/70 top-0 absolute z-0' />
        <div className='w-full h-48 lg:h-96 flex flex-col items-center justify-center absolute top-0 z-10 px-5 lg:px-0 cursor-default'>
            <h1 className='info-page-h1'>Skontaktuj się z nami</h1>
            <p className='info-page-h1-p'>Jeśli chcesz dowiedzieć się więcej o swojej przesyłce lub masz jakiekolwiek inne pytania, skontaktuj się z nami.</p>
        </div>
      </div>
      <div className='py-12 lg:py-20 px-5 flex flex-col items-center'>
        <h2 id='contactform' className='info-page-h2 scroll-mt-40'>Formularz kontaktowy</h2>
        <p className='info-page-h2-p'>Masz do nas pytanie? Wyślij do nas zapytanie używając formularza kontaktowego a odezwiemy się do Ciebie w przeciągu doby!</p>
        <form onSubmit={handleSubmit} className='my-3 w-full lg:w-3/4 flex flex-col'>
            <div className='grid grid-rows-1 lg:grid-cols-2 gap-2'>
              <div className='flex flex-col'>
                <div className='icons-form-input-container'>
                    <BsFillPersonFill />
                    <input type='text' placeholder='Twoje imię' name='clientName' id='clientName' value={values.clientName} onChange={handleChange} className='icons-form-input'/>
                </div>
                {errors.clientName && <p className='error-text'>{errors.clientName}</p>}
                </div>
                <div className='flex flex-col'>
                <div className='icons-form-input-container'>
                    <MdEmail />
                    <input type='text' placeholder='Adres e-mail' name='email' id='email' value={values.email} onChange={handleChange} className='icons-form-input'/>
                </div>
                {errors.email && <p className='error-text'>{errors.email}</p>}
              </div>    
            </div>    
            <div className='flex flex-col w-full my-2'>
            <div className='icons-form-input-container w-full items-start'>
                <TbMessageCircle2Filled className='my-[0.65rem]'/>
                <textarea autoComplete='off' rows={6} placeholder='Twoja wiadomość' value={values.content} name='content' id='content' onChange={handleChange} className='icons-form-input w-full resize-none'/>
            </div>
            {errors.content && <p className='error-text'>{errors.content}</p>}
            </div>
            <div className='flex justify-end'>
              <div className='w-1/3'>
                <SubmitLoadingButton title="Wyślij" loading={loading} />
              </div>
            </div>
            {error && <p className='error-text'>{error}</p>}
        </form>
        <div className='default-page-container items-center my-5 divide-border-top'>
        <h1 className='info-page-h2'>Kontakt</h1>
        <p className='info-page-h2-p'>Jeżeli potrzebujesz skontaktować się z nami jak najszybciej, wybierz jedną z naszych form kontaktowych!</p>
        <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-10 lg:gap-5 mt-5'>
          <ContactElement imgURL='https://iili.io/JBf75xI.png' linkTitle='+48 777 888 999' title='Zadzwoń do nas' path='tel:+48777-888-999' />
          <ContactElement imgURL='https://iili.io/JBf7XxS.png' linkTitle='spellariumemailsender@gmail.com' title='Wyślij do nas e-mail' path='https://www.gmail.com' />
          <ContactElement imgURL='https://iili.io/JBf785x.png' linkTitle='+48 777 888 999' title='Napisz do nas na Whatsapp' path='https://www.whatsapp.com' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
