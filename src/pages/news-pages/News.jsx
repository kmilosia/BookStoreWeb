import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsElement from '../../components/news-elements/NewsElement'
import { useEffect } from 'react'
import { scrollTop } from '../../utils/functions/scrollTop'
import { getNews } from '../../utils/api/newsAPI'
import PageLoader from '../../components/elements/PageLoader'

function News() {
    scrollTop()
    const [news, setNews] = useState([])
    const [first, setFirst] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getNews(7,setNews, setLoading)
    },[])
    useEffect(() => {
      const firstNews = news.length > 0 ? news[0] : null;
      setFirst(firstNews)
    },[news])
  return (
    <div className='default-page-wrapper'>
      {loading ? <PageLoader /> :
      <div className='flex flex-col'>
            {first && 
            <Link to={`/wiadomosc/${first.id}`} className='relative w-full h-48 lg:h-96 rounded-md'>
              <img src={first.imageURL} className='w-full h-full object-cover' />
              <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-3 py-5'>
                <h1 className='text-white lg:text-3xl'>{first.topic}</h1>
              </div>
              <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10'/>
            </Link>}
            <div className='flex flex-col px-5 py-5'>
              <h2 className='text-lg font-semibold mb-1'>Nowo dodane wiadomości</h2>
              <div className='flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-3 gap-3 my-2'>
                {news.slice(1).map((item, index) => (
                  <div key={index} className={index === 0 || index === 3 ? 'lg:row-span-2 lg:col-span-2' : ''}>
                    <NewsElement item={item} />
                  </div>
                ))}
              </div>
              <Link to='/wszystkie-wiadomosci' className='text-button-link mt-3 w-max'>Zobacz wszystkie wiadomości</Link>
            </div>
        </div>
        }
      </div>
  )
}

export default News
