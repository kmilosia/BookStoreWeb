import React, { useEffect, useState } from 'react'
import NewsElement from './NewsElement'
import { Link } from 'react-router-dom'
import axiosClient from '../../utils/api/axiosClient'

function HomeNewsSegment() {
  const [news, setNews] = useState([])
  const getNews = async () => {
    try{
        const response = await axiosClient.get(`/News/Get-Number-Of-News?numberOfElements=7`)
        setNews(response.data)
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
      getNews()
  },[])
  return (
    <div className='flex flex-col'>
    <h1 className='carousel-header mx-0'>Najnowsze wiadomości</h1>
    <div className='grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-5'>
    {news.map((item, index) => (
        <div key={index} className={index === 0 ? 'row-span-2' : ''}>
          <NewsElement item={item} />
        </div>
      ))}
    </div>
    <Link to='/wszystkie-wiadomosci' className='text-button-link mt-5 w-max'>Zobacz wszystkie wiadomości</Link>
    </div>
  )
}

export default HomeNewsSegment
