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
            <EbooksCarousel title="Najpopularniejsze" filter='numberOfElements=10&SortBy=popular&formIds=2&sortOrder=desc'/>
          </div>
          <div className='carousel-element'>
            <EbooksCarousel title="Ostatnio dodane" filter='numberOfElements=10&formIds=2&sortBy=recentlyAdded&sortOrder=desc'/>
          </div>
          <ExploreAllElement path="/ebooki" title="Przeglądaj wszystkie dostępne ebooki" />
          <div className='carousel-element'>
            <EbooksCarousel title="Najlepiej oceniane" filter='numberOfElements=10&formIds=2&sortBy=score&sortOrder=desc'/>
          </div>
          <InstallAppElement />
        </div>
    </div>
  )
}

export default Rental
