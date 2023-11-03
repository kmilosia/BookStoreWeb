import React from 'react'
import NewsCell from '../components/page-elements/NewsCell'
import { Link } from 'react-router-dom'
import LatestNewsCell from '../components/page-elements/LatestNewsCell'

function News() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
        <Link className='relative w-full h-48 lg:h-96 rounded-md'>
            <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover' />
            <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-3 py-3'>
                <h1 className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ea reprehenderit sapiente sequi a dolores fugit iure offi
                cia quibusdam distinctio quas commodi! Doloribus quisquam blanditiis repellat. Repudiandae corrupti at modi.</h1>
            </div>
            <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10'/>
        </Link>
        <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-1 lg:gap-5 my-5 px-5'>
            <div className='flex flex-col'>
            <h3 className='text-lg lg:text-base font-semibold'>Nowo dodane wiadomości</h3>
            <div className='flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-2 my-2'>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <div className='lg:row-span-2 lg:col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <div className='row-span-2 col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
            </div>
            </div>
            <div className='flex flex-col'>
                <div className='divider lg:hidden' />
                <h3 className='text-lg lg:text-base font-semibold'>Popularne wiadomości</h3>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default News
