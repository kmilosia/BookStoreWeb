import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../utils/api/axiosClient'
import { scrollTop } from '../../utils/functions/scrollTop'
import LatestNewsColumn from '../../components/news-elements/LatestNewsColumn'

function NewsItem() {
    const {id} = useParams()
    const newsID = Number(id)
    const [news, setNews] = useState({})
    const getNews = async () => {
        try{
            const response = await axiosClient.get(`/News/${newsID}`)
            setNews(response.data)
        }catch(err){
            console.error(err)
        }
      }
      useEffect(() => {
          scrollTop()
      },[])
      useEffect(() => {
        if(newsID){
            getNews()
        }
    },[newsID])
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
            <img src={news.imageURL} className='w-full h-48 lg:h-96 object-cover' />
            <Link to='/wiadomosci' className='text-button-link my-3 w-max mx-7 flex flex-row items-center underline-hover-purple'><BsArrowLeftShort className='text-lg'/>Wróć do wiadomości</Link>
            <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-2 lg:gap-10 px-7 py-2'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-medium text-start mb-4'>{news.topic}</h1>
                    <article dangerouslySetInnerHTML={{ __html: news.content }}></article>
                </div>
            <LatestNewsColumn />
            </div>
        </div>
    </div>
  )
}

export default NewsItem
