import React from 'react'

function ContactElement(props) {
  return (
    <div className='flex flex-col items-center'>
        <img src={props.imgURL} className='w-1/2 h-auto object-contain my-2' />
        <h1 className='my-1 font-medium'>{props.title}</h1>
        <a href={props.path} target='_blank' className='text-purple-500 hover:text-purple-600 font-semibold'>{props.linkTitle}</a>
    </div>
  )
}

export default ContactElement
