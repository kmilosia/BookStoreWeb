import React from 'react'
import bookReading from '../assets/book-reading.png'
import autumnLeaves from '../assets/autumn-leaves.png'
import Carousel from 'react-grid-carousel'
import BookCarouselItem from '../components/page-elements/BookCarouselItem'


function Home() {
  return (
    <div className='min-h-screen flex flex-col transition-colors bg-midnight-50 dark:bg-midnight-950'>
      <div className='relative w-full h-1/5 flex flex-row items-center justify-between bg-orange-100'>
        <img src={autumnLeaves} className='absolute top-0 left-0 w-3/4 h-full object-cover z-10'/>
        <div className='flex flex-col ml-5 px-10 z-30 bg-orange-100'>
          <h1 className='text-4xl'>Welcome Autumn!</h1>
          <div className='flex flex-row items-end'>
            <p className='text-xl inline-block'>Up to</p>
            <p className='text-3xl text-orange-600 inline-block mx-1'>60%</p>
            <p className='text-xl inline-block'>Discount On All Books</p>
          </div>
          <button className='rounded-md bg-orange-600 text-sm text-midnight-50 py-2 w-2/3 my-3 hover:bg-orange-700'>Discover Now</button>
        </div>
        <img src={bookReading} className='w-[30%] z-30'/>
      </div>
      <div className='my-5 px-5 py-5 flex flex-col text-midnight-950 dark:text-white'>
      <h1 className='text-2xl font-semibold mx-5 my-5'>Bestsellery</h1>
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
