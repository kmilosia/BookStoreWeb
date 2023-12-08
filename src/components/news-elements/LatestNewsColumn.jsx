import React, { useEffect, useState } from 'react'
import LatestNewsElement from './LatestNewsElement'
import axiosClient from '../../utils/api/axiosClient'
import { scrollTop } from '../../utils/functions/scrollTop'

function LatestNewsColumn() {
    const [news, setNews] = useState([])
    const getNews = async () => {
      try{
          const response = await axiosClient.get(`/News/Get-Number-Of-News?numberOfElements=3`)
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
