import React from 'react'
import book from '../assets/categories/book.png'
import ebook from '../assets/categories/ebook.png'
import categories from '../assets/categories/categories.png'
import StoreTypeLink from '../components/links/StoreTypeLink'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'

function Store() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
      <BannerCarousel />
      <div className='grid grid-cols-1 mt-5 mb-3 lg:grid-cols-3 gap-5'>
          <StoreTypeLink src={book} path="/ksiazki" title="Przeglądaj książki" />
          <StoreTypeLink src={ebook} path="/e-booki" title="Przeglądaj e-booki" />
          <StoreTypeLink src={categories} path="/kategorie" title="Przeglądaj kategorie" />
        </div>  
      <div className='carousel-element'>
        <h1 className='carousel-header'>Promocyjne książki</h1>
        <BooksCarousel ebook={false}/>
      </div>
      <ExploreAllElement path="/ksiazki" title="Przeglądaj wszystkie dostępne książki" />
      <div className='carousel-element'>
        <h1 className='carousel-header'>Nowo dodane</h1>
        <BooksCarousel ebook={false}/>
      </div>
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najpopularniejsze</h1>
        <BooksCarousel ebook={false}/>
      </div>
      <InstallAppElement />
    </div>
</div>
  )
}

export default Store
