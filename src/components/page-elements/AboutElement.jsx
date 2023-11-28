import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function AboutElement(props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 px-10 lg:px-20 py-5 lg:py-10'>
      <img src={props.imgURL} className={`w-full h-auto object-contain ${props.isReversed && 'lg:order-last'}`} />
      <div className='flex flex-col justify-center'>
        <h2 className='text-4xl font-bold text-center lg:text-start'>{props.title}</h2>
        <p className='text-2xl font-medium my-4 text-midnight-800 dark:text-midnight-200 text-center lg:text-start'>{props.content}</p>
        <Link to={props.path} className='rounded-purple-button my-2 lg:w-max'><span>{props.button}</span><FiArrowUpRight className='mx-1'/></Link>
      </div>
    </div> 
  )
}

export default AboutElement
