import React from 'react'
import BannerCarousel from '../components/carousel/banner-carousel/BannerCarousel'
import ExploreAllElement from '../components/page-elements/ExploreAllElement'
import InstallAppElement from '../components/page-elements/InstallAppElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel'

function Rental() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
          <BannerCarousel />
          <div className='carousel-element'>
            <h1 className='carousel-header'>Najczęściej wypożyczane ebooki</h1>
            <EbooksCarousel rental={true} filter='numberOfElements=10&sortBy="popular"&formIds=2'/>
          </div>
          <div className='carousel-element'>
            <h1 className='carousel-header'>Nowo dodane ebooki</h1>
            <EbooksCarousel rental={true} filter='numberOfElements=10&formIds=2&sortOrder="desc"'/>
          </div>
          <ExploreAllElement path="/ebooki" title="Przeglądaj wszystkie dostępne ebooki" />
          <div className='carousel-element'>
            <h1 className='carousel-header'>Najlepiej oceniane ebooki</h1>
            <EbooksCarousel rental={true}/>
          </div>
          <InstallAppElement />
        </div>
    </div>
  )
}

export default Rental
