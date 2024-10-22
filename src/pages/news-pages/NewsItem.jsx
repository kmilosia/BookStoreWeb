import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import LatestNewsColumn from '../../components/news-elements/LatestNewsColumn'
import { getNewsInfo } from '../../utils/api/newsAPI'
import PageLoader from '../../components/elements/PageLoader'
import { convertDateDisplay } from '../../utils/functions/convertDate'

function NewsItem() {
    const {id} = useParams()
    const newsID = Number(id)
    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(newsID){
            getNewsInfo(newsID, setNews,setLoading)
        }
    },[newsID])
  return (
    <div className='default-page-wrapper'>
        {loading ? <PageLoader /> :
        <div className='flex flex-col'>
            <img src={news.imageURL} className='w-full h-48 lg:h-96 object-cover object-top mb-3' />
            <div className='flex flex-row items-center w-full px-5 lg:px-10 pt-3 text-sm'>
                <p className='mr-2'>{news.creationDate && convertDateDisplay(news.creationDate)}</p>
                <p className='font-semibold text-purple-400'>{news.authorName}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-2 lg:gap-10 px-5 lg:px-10 py-3'>
                <div className='flex flex-col cursor-default'>
                    <h1 className='text-3xl lg:text-4xl font-medium text-start mb-4'>{news.topic}</h1>
                    <article>{news.content}</article>
                </div>
            <LatestNewsColumn />
            </div>
            <Link to='/wiadomosci' className='text-button-link mb-5 w-max mx-5 lg:mx-7 flex flex-row items-center underline-hover-purple'><BsArrowLeftShort className='text-xl'/>Wróć do wiadomości</Link>
        </div>
        }
    </div>
  )
}

export default NewsItem
