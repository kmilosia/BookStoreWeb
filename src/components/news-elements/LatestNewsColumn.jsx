import React, { useEffect, useState } from 'react'
import LatestNewsElement from './LatestNewsElement'
import { getNews } from '../../utils/api/newsAPI'

function LatestNewsColumn() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getNews(3, setNews,setLoading)
    },[])
  return (
    <div className='flex flex-col divide-border-top pt-2 lg:pt-0 lg:border-none'>
        <h2 className='text-lg font-semibold mb-1'>Najnowsze wiadomości</h2>
        {news.map((item,index)=>{
            return(
              <LatestNewsElement key={index} item={item} />
            )
          })}
    </div>
  )
}

export default LatestNewsColumn
