import React from 'react'
import StoreTypeLink from '../components/links/StoreTypeLink'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'

function Store() {
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
      <BannerCarousel />
      <div className='grid mt-5 mb-3 grid-cols-3 gap-5'>
          <StoreTypeLink src='https://iili.io/JBf7uNp.png' path="/ksiazki" title="Przeglądaj książki" />
          <StoreTypeLink src='https://iili.io/JBf7lls.png' path="/ebooki" title="Przeglądaj ebooki" />
          <StoreTypeLink src='https://iili.io/JCnBzCl.png' path="/kategorie" title="Przeglądaj kategorie" />
        </div>  
      <div className='carousel-element'>
        <BooksCarousel title="Najpopularniejsze" filter='numberOfElements=10&sortBy=popular'/>
      </div>
      <div className='carousel-element'>
        <BooksCarousel title="Ostatnio dodane" filter='numberOfElements=10&sortBy=recentlyAdded'/>
      </div>
      <ExploreAllElement path="/ksiazki" title="Przeglądaj wszystkie dostępne książki" />
      <div className='carousel-element'>
        <BooksCarousel title="Najlepiej oceniane" filter='numberOfElements=10&sortBy=score'/>
      </div>
      <ExploreAllElement path="/ebooki" title="Przeglądaj wszystkie dostępne ebooki" />
      <InstallAppElement />
    </div>
</div>
  )
}

export default Store
