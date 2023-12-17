import React, { useEffect, useState } from 'react'
import NewsElement from './NewsElement'
import { Link } from 'react-router-dom'
import { getNews } from '../../utils/api/newsAPI'

function HomeNewsSegment() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      getNews(7,setNews,setLoading)
  },[])
  return (
    <div className='flex flex-col'>
    <h1 className='carousel-header mx-0'>Najnowsze wiadomości</h1>
    <div className='grid grid-cols-1 lg:grid-cols-4 grid-rows-1 lg:grid-rows-2 gap-5'>
    {loading ?
    <div className='col-span-4 row-span-2 h-80 bg-white dark:bg-midnight-900 animate-pulse rounded-md'></div> 
    : (
    news.map((item, index) => (
        <div key={index} className={index === 0 ? 'row-span-2' : ''}>
          <NewsElement item={item} />
        </div>
      ))
    )}
    </div>
    <Link to='/wszystkie-wiadomosci' className='text-button-link mt-5 w-max'>Zobacz wszystkie wiadomości</Link>
    </div>
  )
}

export default HomeNewsSegment
