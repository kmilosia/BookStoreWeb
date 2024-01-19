import React from 'react'
import NewsletterForm from '../components/page-elements/NewsletterForm'
import InfiniteCarousel from '../components/carousel/infinite-carousel/InfiniteCarousel'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import EventDiscountElement from '../components/page-elements/EventDiscountElement'
import HomeNewsSegment from '../components/news-elements/HomeNewsSegment'

function Home() {
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col pt-5'>
      <InfiniteCarousel form="book"/>
      <InfiniteCarousel form="ebook" isReversed={true}/>
      </div>
      <div className='default-page-container pt-0'>
        <div className='carousel-element mb-5'>
          <BooksCarousel title="Najpopularniejsze" filter='numberOfElements=10&sortBy="popular"'/>
        </div>
        <BannerCarousel />
        <div className='carousel-element'>
          <BooksCarousel title="Ostatnio dodane" filter='numberOfElements=10&sortOrder="desc"'/>
        </div>
        <EventDiscountElement />
        <div className='carousel-element'>
          <BooksCarousel title="Przecenione" filter='numberOfElements=10&isOnSale=true'/>
        </div>
       <HomeNewsSegment />
      </div>
      <NewsletterForm />
    </div>
  )
}

export default Home
