import React, { useState } from 'react'

function ContactElement(props) {
  const [loading, setLoading] = useState(true)
  return (
    <div className='flex flex-col items-center'>
        {loading && <div className='w-60 h-60 rounded-full bg-white dark:bg-midnight-900 animate-pulse'></div> }
        <img onLoad={() => {setLoading(false)}} src={props.imgURL} className={`w-2/3 lg:w-1/2 h-auto object-contain my-2 ${loading ? 'hidden' : 'block'}`} alt='Ikona kontaktowa' />
        <h1 className='my-1 font-medium'>{props.title}</h1>
        <a href={props.path} target='_blank' className='text-purple-500 hover:text-purple-600 font-semibold'>{props.linkTitle}</a>
    </div>
  )
}

export default ContactElement
