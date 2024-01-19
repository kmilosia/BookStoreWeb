import React from 'react'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel'

function Rental() {
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
          <BannerCarousel />
          <div className='carousel-element'>
            <EbooksCarousel title="Najpopularniejsze" filter='numberOfElements=10&SortBy="popular"&formIds=2'/>
          </div>
          <div className='carousel-element'>
            <EbooksCarousel title="Polecane" rental={true} filter='numberOfElements=10&formIds=2&sortOrder=desc'/>
          </div>
          <ExploreAllElement path="/produkty" title="Przeglądaj wszystkie dostępne ebooki" />
          <div className='carousel-element'>
            <EbooksCarousel title="Najnowsze" filter='numberOfElements=10&formIds=2&sortOrder=asc'/>
          </div>
          <InstallAppElement />
        </div>
    </div>
  )
}

export default Rental
