import React from 'react'
import NewsletterForm from '../components/page-elements/NewsletterForm'
import InfiniteCarousel from '../components/carousel/infinite-carousel/InfiniteCarousel'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import EventDiscountElement from '../components/page-elements/EventDiscountElement'
import HomeNewsSegment from '../components/news-elements/HomeNewsSegment'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'

function Home() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col pt-5'>
      <InfiniteCarousel />
      <InfiniteCarousel isReversed={true}/>
      </div>
      <div className='default-page-container pt-0'>
        <div className='carousel-element mb-5'>
          <h1 className='carousel-header'>Bestsellery</h1>
          <BooksCarousel ebook={false}/>
        </div>
        <BannerCarousel />
        <div className='carousel-element'>
          <h1 className='carousel-header'>Nowo dodane</h1>
          <BooksCarousel ebook={false}/>
        </div>
        <EventDiscountElement />
        <div className='carousel-element'>
          <h1 className='carousel-header'>Top 10 Wybór Spellarium</h1>
          <BooksCarousel ebook={false}/>
        </div>
       <HomeNewsSegment />
      </div>
      <NewsletterForm />
    </div>
  )
}

export default Home
