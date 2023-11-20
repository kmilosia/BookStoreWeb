import React from 'react'
import {  Outlet } from 'react-router-dom'
import { scrollTop } from '../../utils/functions/scrollTop'
import { useEffect } from 'react'
import LibraryCarousel from '../../components/carousel/library-carousel/LibraryCarousel'

function Library() {
    useEffect(() => {
        scrollTop()
    },[])
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
    <Outlet />
    <div className='flex flex-col w-full'>
        <LibraryCarousel />
    </div>
    </div>
    </div>
  )
}

export default Library
