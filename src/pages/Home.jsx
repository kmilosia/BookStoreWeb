import React from 'react'
import Carousel from 'react-grid-carousel'
import BookCarouselItem from '../components/page-elements/BookCarouselItem'
import HomeAdsCarousel from '../components/carousel/HomeAdsCarousel'
import InfiniteCarousel from '../components/carousel/InfiniteCarousel'

function Home() {
  return (
    <div className='min-h-screen pb-3 flex flex-col transition-colors bg-midnight-50 dark:bg-midnight-950'>
      <InfiniteCarousel />
      <InfiniteCarousel isReversed={true}/>
      <div className='px-0 lg:px-5 py-5 flex flex-col text-midnight-950 dark:text-white'>
      <h1 className='text-2xl font-semibold mx-5 my-2 lg:my-5'>Bestsellery</h1>
        <Carousel cols={5} rows={1} gap={20}>
            <Carousel.Item>
            <BookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
            <Carousel.Item>
            <BookCarouselItem url='https://m.media-amazon.com/images/I/A1sghRmdgyL._AC_UF1000,1000_QL80_.jpg'
              title="Imperator Rzymu" author="Mary Beard" price="19.99" score={3} />    
            </Carousel.Item>
            <Carousel.Item>
            <BookCarouselItem url='https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg'
              title="Taniec ze Smokami" author="George R.R. Martin" price="19.99" score={5} />    
            </Carousel.Item>
            <Carousel.Item>
            <BookCarouselItem url='https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1680860505/content-items/013/518/117/dunellibre-copia1-original.jpg?1680860505'
              title="Diuna" author="Frank Herbert" price="15.99" score={4} />    

            </Carousel.Item>
            <Carousel.Item>
              <BookCarouselItem url='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg'
              title="Harry Potter i Więzień Azkabanu" author="J.K. Rowling" price="24.99" score={5} />
            </Carousel.Item>
            <Carousel.Item>
            <BookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
          </Carousel>
      </div>
    </div>
  )
}

export default Home
