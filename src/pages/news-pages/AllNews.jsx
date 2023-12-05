import React, { useState } from 'react'
import NewsElement from '../../components/news-elements/NewsElement'
import { scrollTop } from '../../utils/functions/scrollTop'
import { useEffect } from 'react'
import axiosClient from '../../utils/api/axiosClient'

function AllNews() {
  const [news, setNews] = useState([])
  const getNews = async () => {
    try{
        const response = await axiosClient.get(`/News`)
        setNews(response.data)
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
      scrollTop()
      getNews()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <h1 className='text-3xl font-semibold cursor-default'>Wiadomości</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 my-5'>
          {news.map((item,index)=>{
            return(
              <NewsElement key={index} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllNews
