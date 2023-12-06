import React from 'react'
import NewsletterForm from '../components/page-elements/NewsletterForm'
import InfiniteCarousel from '../components/carousel/infinite-carousel/InfiniteCarousel'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import EventDiscountElement from '../components/page-elements/EventDiscountElement'
import HomeNewsSegment from '../components/news-elements/HomeNewsSegment'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel'

function Home() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col pt-5'>
      <InfiniteCarousel form="book"/>
      <InfiniteCarousel form="ebook" isReversed={true}/>
      </div>
      <div className='default-page-container pt-0'>
        <div className='carousel-element mb-5'>
          <h1 className='carousel-header'>Najpopularniejsze książki</h1>
          <BooksCarousel filter='numberOfElements=10&sortBy="popular"&formIds=1'/>
        </div>
        <BannerCarousel />
        <div className='carousel-element'>
          <h1 className='carousel-header'>Najpopularniejsze ebooki</h1>
          <EbooksCarousel filter='numberOfElements=10&sortBy="popular"&formIds=2'/>
        </div>
        <EventDiscountElement />
       <HomeNewsSegment />
      </div>
      <NewsletterForm />
    </div>
  )
}

export default Home
