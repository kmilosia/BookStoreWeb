import React from 'react'

function NewsletterForm() {
  return (
    <div className='flex flex-col items-center justify-center w-full py-10 md:py-12 px-2 md:px-0
     bg-no-repeat bg-cover newsletter-bg-light dark:newsletter-bg-dark'>
        <h1 className='text-2xl default-text my-4 font-medium'>Zapisz się do newslettera</h1>
        <form className='px-5 md:px-0 w-full flex flex-col items-center justify-center mb-4'>
        <div className="relative my-1 w-full md:w-1/2 lg:w-1/3">
            <input type="text" id='email-input' name='email' className="newsletter-input peer" placeholder=" " />
            <label htmlFor='email-input' className="newsletter-input-label">Twój adres e-mail</label>
        </div>
        <button className='w-full md:w-1/2 lg:w-1/3 purple-button'>Zapisz się</button>
        </form>
      </div>
  )
}

export default NewsletterForm
