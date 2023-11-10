import React from 'react'
import Carousel from 'react-grid-carousel'
import comedy from '../assets/categories/comedy.png'
import fantasy from '../assets/categories/fantasy.png'
import horror from '../assets/categories/horror.png'
import kids from '../assets/categories/kids.png'
import lifestyle from '../assets/categories/lifestyle.png'
import poetry from '../assets/categories/poetry.png'
import romance from '../assets/categories/romance.png'
import science from '../assets/categories/science.png'
import scifi from '../assets/categories/scifi.png'
import teenagers from '../assets/categories/teenagers.png'
import history from '../assets/categories/history.png'
import biography from '../assets/categories/biography.png'
import cooking from '../assets/categories/cooking.png'
import custom from '../assets/categories/custom.png'
import comics from '../assets/categories/comics.png'
import school from '../assets/categories/school.png'
import CategoryCarouselItem from '../components/carousel/CategoryCarouselItem'
import ElectronicBookCarouselItem from '../components/carousel/ElectronicBookCarouselItem'

function Rental() {
  return (
    <div className='default-page-wrapper flex flex-col px-1 lg:px-4 py-4 overflow-hidden'>
        <div className='max-w-full px-1 lg:px-2 py-2'>
        <div className='mb-5 flex flex-col'>
        <h1 className='text-2xl font-semibold mx-5 mt-3 mb-5 lg:mt-5'>Popularne kategorie</h1>
        <Carousel cols={5} rows={1} gap={20}>
          <Carousel.Item>
            <CategoryCarouselItem src={fantasy} title="Fantasy" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={comedy} title="Komedia" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={horror} title="Horror" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={kids} title="Dla Dzieci" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={scifi} title="Science Fiction" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={teenagers} title="Dla Młodzieży" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={science} title="Nauka" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={romance} title="Romans" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={poetry} title="Poezja" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={history} title="Historia" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={school} title="Podręczniki" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={custom} title="Obyczajowe" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={comics} title="Komiks" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={cooking} title="Kulinarne" />
          </Carousel.Item>
          <Carousel.Item>
            <CategoryCarouselItem src={biography} title="Biografia" />
          </Carousel.Item>
        </Carousel>
        </div>
        <div className='flex flex-col my-5'>
        <h1 className='text-2xl font-semibold mx-5 mt-3 mb-5 lg:mt-5'>Popularne Ebooki</h1>
          <Carousel cols={5} rows={1} gap={20}>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://m.media-amazon.com/images/I/A1sghRmdgyL._AC_UF1000,1000_QL80_.jpg'
              title="Imperator Rzymu" author="Mary Beard" price="19.99" score={3} />    
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg'
              title="Taniec ze Smokami" author="George R.R. Martin" price="19.99" score={5} />    
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1680860505/content-items/013/518/117/dunellibre-copia1-original.jpg?1680860505'
              title="Diuna" author="Frank Herbert" price="15.99" score={4} />    

            </Carousel.Item>
            <Carousel.Item>
              <ElectronicBookCarouselItem url='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg'
              title="Harry Potter i Więzień Azkabanu" author="J.K. Rowling" price="24.99" score={5} />
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='flex flex-col my-5'>
        <h1 className='text-2xl font-semibold mx-5 mt-3 mb-5 lg:mt-5'>Najczęściej wypożyczane</h1>
          <Carousel cols={5} rows={1} gap={20}>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://m.media-amazon.com/images/I/A1sghRmdgyL._AC_UF1000,1000_QL80_.jpg'
              title="Imperator Rzymu" author="Mary Beard" price="19.99" score={3} />    
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg'
              title="Taniec ze Smokami" author="George R.R. Martin" price="19.99" score={5} />    
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1680860505/content-items/013/518/117/dunellibre-copia1-original.jpg?1680860505'
              title="Diuna" author="Frank Herbert" price="15.99" score={4} />    

            </Carousel.Item>
            <Carousel.Item>
              <ElectronicBookCarouselItem url='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg'
              title="Harry Potter i Więzień Azkabanu" author="J.K. Rowling" price="24.99" score={5} />
            </Carousel.Item>
            <Carousel.Item>
            <ElectronicBookCarouselItem url='https://live-production.wcms.abc-cdn.net.au/62706759bcebd2cfd0718314aea48806?src'
              title="Kobieta we mnie" author="Britney Spears" price="49.99" score={4} />
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
    </div>
  )
}

export default Rental
