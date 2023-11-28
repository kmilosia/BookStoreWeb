import React from 'react'
import { Link } from 'react-router-dom'
import LatestNewsElement from '../../components/news-elements/LatestNewsElement'
import NewsElement from '../../components/news-elements/NewsElement'
import PopularNewsColumn from '../../components/news-elements/PopularNewsColumn'
import { useEffect } from 'react'
import { scrollTop } from '../../utils/functions/scrollTop'

function News() {
    useEffect(() => {
        scrollTop()
    },[])
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
        <Link className='relative w-full h-48 lg:h-96 rounded-md'>
            <img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_41/1787296/britney-jamie-lynn-spears-mc-main1-211013.jpg' className='w-full h-full object-cover' />
            <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-3 py-5'>
                <h1 className='text-white lg:text-3xl'>Britney Spears wali farmazony na temat swojej siostry i w sumie dobrze bo ta siostra to też jakaś psychiczna</h1>
            </div>
            <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10'/>
        </Link>
        <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-1 lg:gap-5 my-5 px-5'>
            <div className='flex flex-col'>
            <h2 className='news-page-h2'>Nowo dodane wiadomości</h2>
            <div className='flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-2 my-2'>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                </div>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                </div>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                </div>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <div className='row-span-2 col-span-2'>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                </div>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
                <NewsElement title="Rowling wydaję nową książkę" imgURL='https://media.glamour.com/photos/5e8b5fa215ec450009291fd9/master/w_2560%2Cc_limit/GettyImages-1061228896.jpg'/>
            </div>
            </div>
            <PopularNewsColumn />
        </div>
        </div>
    </div>
  )
}

export default News
