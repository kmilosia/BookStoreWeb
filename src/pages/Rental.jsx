import React from 'react'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import InstallAppElement from '../components/page-elements/InstallAppElement'

function Rental() {
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
          <BannerCarousel />
          <div className='carousel-element'>
            <h1 className='carousel-header'>Wypożycz już teraz</h1>
            <BooksCarousel ebook={true}/>
          </div>
          <ExploreAllElement path="/e-booki" title="Przeglądaj wszystkie dostępne ebooki" />
          <div className='carousel-element'>
            <h1 className='carousel-header'>Nowo dodane</h1>
            <BooksCarousel ebook={true}/>
          </div>
          <div className='carousel-element'>
            <h1 className='carousel-header'>Najpopularniejsze</h1>
            <BooksCarousel ebook={true}/>
          </div>
          <InstallAppElement />
        </div>
    </div>
  )
}

export default Rental
