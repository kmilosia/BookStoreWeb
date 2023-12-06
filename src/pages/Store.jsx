import React from 'react'
import StoreTypeLink from '../components/links/StoreTypeLink'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel'

function Store() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
      <BannerCarousel />
      <div className='grid grid-cols-1 mt-5 mb-3 lg:grid-cols-3 gap-5'>
          <StoreTypeLink src='https://iili.io/JBf7uNp.png' path="/ksiazki" title="Przeglądaj książki" />
          <StoreTypeLink src='https://iili.io/JBf7lls.png' path="/ebooki" title="Przeglądaj ebooki" />
          <StoreTypeLink src='https://iili.io/JCnBzCl.png' path="/kategorie" title="Przeglądaj kategorie" />
        </div>  
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najpopularniejsze książki</h1>
        <BooksCarousel filter='numberOfElements=10&sortBy="popular"&formIds=1'/>
      </div>
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najlepiej oceniane książki</h1>
        <BooksCarousel/>
      </div>
      <div className='carousel-element'>
        <h1 className='carousel-header'>Nowo dodane książki</h1>
        <BooksCarousel filter='numberOfElements=10&formIds=1&sortOrder="desc"'/>
      </div>
      <ExploreAllElement path="/ksiazki" title="Przeglądaj wszystkie dostępne książki" />
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najnowsze ebooki</h1>
        <EbooksCarousel rental={false} filter='numberOfElements=10&formIds=2&sortOrder="desc"'/>
      </div>
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najpopularniejsze ebooki</h1>
        <EbooksCarousel rental={false} filter='numberOfElements=10&sortBy="popular"&formIds=2'/>
      </div>
      <ExploreAllElement path="/ebooki" title="Przeglądaj wszystkie dostępne ebooki" />
      <div className='carousel-element'>
        <h1 className='carousel-header'>Najlepiej oceniane ebooki</h1>
        <EbooksCarousel rental={false}/>
      </div>
      <InstallAppElement />
    </div>
</div>
  )
}

export default Store
