import React, { useState } from 'react'
import NewsElement from '../../components/news-elements/NewsElement'
import { scrollTop } from '../../utils/functions/scrollTop'
import { useEffect } from 'react'
import { getAllNews } from '../../utils/api/newsAPI'
import PageLoader from '../../components/elements/PageLoader'

function AllNews() {
  scrollTop()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      getAllNews(setNews, setLoading)
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {loading ? <PageLoader /> : 
        <>
        <h1 className='text-3xl font-semibold cursor-default'>Wiadomości</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-5'>
          {news.map((item,index)=>{
            return(
              <NewsElement key={index} item={item} />
            )
          })}
        </div>
        </>}
      </div>
    </div>
  )
}

export default AllNews
