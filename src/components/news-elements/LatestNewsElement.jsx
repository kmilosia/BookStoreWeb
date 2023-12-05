import React from 'react'
import { Link } from 'react-router-dom'

function LatestNewsElement({item}) {
  return (
    <Link to={`/wiadomosc/${item.id}`} className='w-full h-auto flex flex-col my-2 hover:scale-105'>
        <img src={item.imageURL} className='rounded-md w-full h-auto object-cover' />
        <h1 className='my-2 mx-2 font-medium'>{item.topic}</h1>
    </Link>
  )
}

export default LatestNewsElement
