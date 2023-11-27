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
      <InfiniteCarousel />
      <InfiniteCarousel isReversed={true}/>
      </div>
      <div className='default-page-container pt-0'>
        <div className='carousel-element mb-5'>
          <h1 className='carousel-header'>Książkowe Bestsellery</h1>
          <BooksCarousel/>
        </div>
        <BannerCarousel />
        <div className='carousel-element'>
          <h1 className='carousel-header'>Nowo dodane książki</h1>
          <BooksCarousel/>
        </div>
        <EventDiscountElement />
        <div className='carousel-element'>
          <h1 className='carousel-header'>Bestsellery ebooki</h1>
          <EbooksCarousel/>
        </div>
        <div className='carousel-element'>
          <h1 className='carousel-header'>Nowo dodane ebooki</h1>
          <EbooksCarousel/>
        </div>
       <HomeNewsSegment />
      </div>
      <NewsletterForm />
    </div>
  )
}

export default Home
