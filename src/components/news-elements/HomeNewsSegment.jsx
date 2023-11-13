import React from 'react'
import NewsElement from './NewsElement'
import { Link } from 'react-router-dom'

function HomeNewsSegment() {
  return (
    <div className='flex flex-col'>
    <h1 className='carousel-header mx-0'>Najnowsze wiadomości</h1>
    <div className='grid grid-cols-4 grid-rows-2 gap-5'>
      <NewsElement rows={2} imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
      <NewsElement imgURL='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' title="Świąteczne top 10 książek"/>
    </div>
    <Link to='/wiadomosci' className='text-button-link mt-5 w-max'>Zobacz wszystkie wiadomości</Link>
    </div>
  )
}

export default HomeNewsSegment
