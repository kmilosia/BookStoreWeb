import React, { useEffect, useState } from 'react'
import { emailValidate } from '../../utils/validation/emailValidation';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../elements/Spinner'
import { resetState, signNewsletter } from '../../store/userSlice';
import { showMessage } from '../../store/messageSlice';

function NewsletterForm() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const {loading,error,success} = useSelector((state) => state.user)
  const [email, setEmail] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(emailValidate(email))
    setSubmitting(true)
  }
  const finishSubmit = () => {
   dispatch(signNewsletter(email))
  }
  useEffect(() => {
    if(success){
      setEmail('')
      dispatch(showMessage({title: 'Zostałeś zapisany do naszego Newslettera'}))
      dispatch(resetState())
    }
  },[success])
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])
  return (
    <div id='newsletter' className='flex flex-col items-center justify-center w-full py-10 md:py-12 px-2 md:px-0 bg-no-repeat bg-cover newsletter-bg-light dark:newsletter-bg-dark'>
        <h1 className='text-3xl default-text my-3 font-semibold cursor-default'>Zapisz się do newslettera</h1>
        <div onSubmit={handleSubmit} className='w-full'>
          <div className='px-5 md:px-0 w-full flex flex-col items-center justify-center mb-4'>
          <div className="relative my-1 w-full md:w-1/2 lg:w-1/3">
              <input type="text" id='email' name='email' value={email} onChange={handleChange} className="newsletter-input peer" placeholder=" " />
              <label htmlFor='email' className="newsletter-input-label">Twój adres e-mail</label>
          </div>
          <button onClick={handleSubmit} className='purple-button w-full md:w-1/2 lg:w-1/3'>
            {loading ? <Spinner /> : <span>Zapisz się</span>}
          </button>
          {errors && <p className='error-text'>{errors.email}</p>}
          {error && <p className='error-text'>{error}</p>}
          </div>
        </div>
      </div>
  )
}

export default NewsletterForm
