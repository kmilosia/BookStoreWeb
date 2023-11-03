import React from 'react'
import NewsCell from '../components/page-elements/NewsCell'
import { Link } from 'react-router-dom'

function News() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
        <Link className='relative w-full h-96 rounded-md'>
            <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover' />
            <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-5 py-2'>
                <h1 className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ea reprehenderit sapiente sequi a dolores fugit iure offi
                cia quibusdam distinctio quas commodi! Doloribus quisquam blanditiis repellat. Repudiandae corrupti at modi.</h1>
            </div>
            <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10'/>
        </Link>
        <div className='grid grid-cols-[4fr_1fr] gap-5 my-5'>
            <div className='grid grid-cols-4 grid-rows-4 gap-2'>
                <div className='row-span-2 col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <div className='row-span-2 col-span-2'>
                <NewsCell title="Some title"/>
                </div>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <div className='row-span-2 col-span-2'>
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
            <div className='flex flex-col'>
            <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
                <NewsCell title="Some title"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default News
