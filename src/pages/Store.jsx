import React from 'react'
import StoreTypeLink from '../components/links/StoreTypeLink'
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel'

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
        <BooksCarousel title="Najpopularniejsze książki" filter='numberOfElements=10&sortBy="popular"&formIds=1'/>
      </div>
      <div className='carousel-element'>
        <BooksCarousel title="Najlepiej oceniane książki"/>
      </div>
      <div className='carousel-element'>
        <BooksCarousel title="Nowo dodane książki" filter='numberOfElements=10&formIds=1&sortOrder="desc"'/>
      </div>
      <ExploreAllElement path="/ksiazki" title="Przeglądaj wszystkie dostępne książki" />
      <div className='carousel-element'>
        <EbooksCarousel title="Najnowsze ebooki" rental={false} filter='numberOfElements=10&formIds=2&sortOrder="desc"'/>
      </div>
      <div className='carousel-element'>
        <EbooksCarousel title="Najpopularniejsze ebooki" rental={false} filter='numberOfElements=10&sortBy="popular"&formIds=2'/>
      </div>
      <ExploreAllElement path="/ebooki" title="Przeglądaj wszystkie dostępne ebooki" />
      <div className='carousel-element'>
        <EbooksCarousel title="Najlepiej oceniane ebooki" rental={false}/>
      </div>
      <InstallAppElement />
    </div>
</div>
  )
}

export default Store
