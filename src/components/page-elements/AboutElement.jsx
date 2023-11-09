import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function AboutElement(props) {
  return (
    <div className='grid grid-cols-2 gap-20 px-20 py-10'>
        {props.isReversed ?
        <>
        <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold'>{props.title}</h2>
            <p className='text-2xl font-medium my-4 text-midnight-800 dark:text-midnight-200'>{props.content}</p>
            <Link to={props.path} className='rounded-purple-button flex flex-row items-center justify-center my-4'><span>{props.button}</span><FiArrowUpRight className='mx-1'/></Link>
        </div>
        <img src={props.imgURL} className='w-full h-auto object-contain' />
        </>
        :
        <>
        <img src={props.imgURL} className='w-full h-auto object-contain' />
        <div className='flex flex-col justify-center'>
        <h2 className='text-4xl font-bold'>{props.title}</h2>
        <p className='text-2xl font-medium my-4 text-midnight-800 dark:text-midnight-200'>{props.content}</p>
        <Link to={props.path} className='rounded-purple-button flex flex-row items-center justify-center my-4'><span>{props.button}</span><FiArrowUpRight className='mx-1'/></Link>
        </div>
        </>
        }
    </div> 
  )
}

export default AboutElement
