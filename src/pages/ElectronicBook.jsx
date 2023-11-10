import React from 'react'
import {FaHeart} from 'react-icons/fa'
import {BsShareFill,BsArrowDownShort,BsArrowUpShort} from 'react-icons/bs'
import Stars from '../components/elements/Stars'
import Carousel from 'react-grid-carousel'
import Review from '../components/page-elements/Review';
import BookItemCarousel from '../components/carousel/BookItemCarousel';



function ElectronicBook() {
  return (
    <div className='flex flex-col px-12 py-5 bg-sunrise-300 min-h-screen dark:bg-midnight-950'>
    <div className='h-80 w-full relative'>
    <div className='grid grid-cols-[2fr_3fr_5fr] gap-20 h-96 w-full top-[2rem] absolute'>
      <div className='flex flex-row justify-end items-center'>
        <div className='flex flex-col mx-3'>
          <button className='h-20 w-20 my-1 bg-sunrise-100 px-1 py-1 rounded-md border-sunrise-100 border-2 hover:border-orange-400 dark:bg-midnight-800 dark:border-midnight-600 dark:hover:border-orange-400'>
            <img src='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg' className='w-full h-full object-contain' />
          </button>
          <button className='h-20 w-20 my-1 bg-sunrise-100 px-1 py-1 rounded-md border-sunrise-100 border-2 hover:border-orange-400 dark:bg-midnight-800 dark:border-midnight-600 dark:hover:border-orange-400'>
            <img src='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg' className='w-full h-full object-contain' />
          </button>
          <button className='h-20 w-20 my-1 bg-sunrise-100 px-1 py-1 rounded-md border-sunrise-100 border-2 hover:border-orange-400 dark:bg-midnight-800 dark:border-midnight-600 dark:hover:border-orange-400'>
            <img src='https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg' className='w-full h-full object-contain' />
          </button>
        </div>
      <div className='flex flex-col justify-center items-end'>
        <button className='text-4xl rounded-3xl my-1 hover:bg-sunrise-100 dark:hover:bg-orange-400 dark:text-midnight-100'><BsArrowUpShort /></button>
        <button className='text-4xl rounded-3xl my-1 hover:bg-sunrise-100 dark:hover:bg-orange-400 dark:text-midnight-100'><BsArrowDownShort /></button>
      </div>
      </div> 
      <img src='https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg' className='h-96 w-auto object-contain justify-self-end shadow-book' />
      {/* <CarouselBook /> */}
      <div className='flex flex-col mr-5 relative border-b-[1px] border-sunrise-300 dark:border-midnight-700'>
      <h1 className='text-4xl font-semibold my-3 cursor-default dark:text-white'>Harry Potter and Philosopher's Stone</h1>
           <h2 className='font-[500] my-2 text-lg cursor-default dark:text-white'>J.K. Rowling</h2>
           <a href='#reviews' className='my-2 w-max group flex flex-row items-center'>
            <Stars score={4} />
            <p className='opacity-0 mx-2 text-yellow-400 text-xs transition duration-500 ease-in-out group-hover:opacity-100'>Przejdź do recenzji..</p>
           </a>
          <p className='font-light my-2 cursor-default dark:text-white'>E-Book PDF</p>
          <h3 className='text-3xl font-[600] my-2 cursor-default dark:text-white'>39.99 zł</h3>
          <div className='flex flex-row justify-between w-full absolute bottom-5'>
            <div className='flex flex-row'>
            <button className='bg-midnight-950 text-white px-4 py-2 rounded-3xl text-sm font-[500] hover:bg-midnight-800 dark:bg-sunrise-200 dark:text-midnight-900 dark:hover:bg-sunrise-400'>Dodaj do koszyka</button>
            <button className='bg-midnight-950 text-white px-4 py-2 rounded-3xl mx-2 text-sm font-[500] hover:bg-midnight-800 dark:bg-sunrise-200 dark:text-midnight-900 dark:hover:bg-sunrise-400'>Wypożycz od 1.99zł</button>
            </div>
            <div className='flex flex-row'>
              <button className='rounded-3xl bg-sunrise-300 h-10 w-10 flex items-center justify-center mx-1 hover:bg-sunrise-400'><FaHeart /></button>
              <button className='rounded-3xl bg-sunrise-300 h-10 w-10 flex items-center justify-center mx-1 hover:bg-sunrise-400'><BsShareFill /></button>
            </div> 
          </div>
      </div>
    </div>
    </div>
    <div className='bg-sunrise-100 pt-40 pb-10 px-10 dark:bg-midnight-800'>
      <div className='grid grid-cols-[3fr_2fr] gap-10 px-5 dark:text-white'>
      <div className='flex flex-col'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Opis</h3>
          <p className='break-all'>Lorem ipsum dolor sit amet consectetur adipisicing econsectetur lit. Eius maxime, quidem fugconsectetur it doloribus magniconsectetur consectetur  aperiam beatae. Facilis rem excepturi vaspernationeaspernationeaspernationeaspernationeaspernationeaspernationeaspernationeaspernatione ex aut?Eligendi in sit animi natus maiores ratione ex aut?          
          <button className='text-sm font-light text-orange-400 mx-2 hover:text-orange-500'>Czytaj więcej..</button></p>
        </div>  
        <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>ISBN</h3>
          <p>6473829837</p>
        </div>  
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Data wydania</h3>
          <p>20-04-2021</p>
        </div> 
        </div>
        <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Liczba stron</h3>
          <p>548</p>
        </div>  
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Język oryginalny</h3>
          <p>Angielski</p>
        </div>
        </div>
        </div>
      <div className='flex flex-col mt-3'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Autor</h3>
          <p>J.K. Rowling</p>
        </div>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Wydawnictwo</h3>
          <p>Wydawnictwo Nasza Księgarnia</p>
        </div>
        <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Język produktu</h3>
          <p>Polski</p>
        </div>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Tłumaczenie</h3>
          <p>Jan Kowalski</p>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Format pliku</h3>
          <p>PDF</p>
        </div>
        <div className='flex flex-col my-3'>
          <h3 className='font-[600] mb-3'>Format</h3>
          <p>E-Book</p>
        </div>
        </div>
       
      </div>
      </div>
    </div>
      <div className='flex flex-col px-5 py-8 my-5 bg-sunrise-100 dark:bg-midnight-800 dark:text-white'>
        <h1 className='text-2xl font-semibold mx-5 my-3'>Podobne produkty</h1>
          <div className='flex flex-col max-w-full'>
          <Carousel cols={5} rows={1} gap={30}>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
             
            </Carousel>
          </div>
      </div>
      <div id='reviews' className='flex flex-col px-5 py-8 my-5 bg-sunrise-100 scroll-mt-32 dark:bg-midnight-800 dark:text-white'>
        <h1 className='text-2xl font-semibold mx-5 my-2'>Recenzje</h1>
        <div className='flex flex-row my-2 mx-5 py-10 justify-around items-center bg-white dark:bg-midnight-900'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl'>4,2</h1>
            <Stars score={4} />
            <p className='text-sm'>Średnia ocena z 200 recenzji</p>
            <button className='bg-orange-400 hover:bg-orange-500 rounded-3xl w-full text-white text-sm py-2 my-1'>Oceń książkę</button>
          </div>
          <div className='flex flex-col'>

            <div className='flex flex-row items-center'>
              <Stars score={5} />
              <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
                <div className='bg-orange-400 h-2.5 rounded-full w-[45%]'></div>
              </div>
              <span className='text-xs font-light'>20 recenzji</span>
            </div>
            <div className='flex flex-row items-center'>
              <Stars score={4} />
              <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
                <div className='bg-orange-400 h-2.5 rounded-full w-[70%]'></div>
              </div>
              <span className='text-xs font-light'>70 recenzji</span>
            </div>
            <div className='flex flex-row items-center'>
              <Stars score={3} />
              <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
                <div className='bg-orange-400 h-2.5 rounded-full w-[55%]'></div>
              </div>
              <span className='text-xs font-light'>50 recenzji</span>
            </div>
            <div className='flex flex-row items-center'>
              <Stars score={2} />
              <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
                <div className='bg-orange-400 h-2.5 rounded-full w-[10%]'></div>
              </div>
              <span className='text-xs font-light'>10 recenzji</span>
            </div>
            <div className='flex flex-row items-center'>
              <Stars score={1} />
              <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
                <div className='bg-orange-400 h-2.5 rounded-full w-[0%]'></div>
              </div>
              <span className='text-xs font-light'>0 recenzji</span>
            </div>         
          </div>
        </div>
        <div className='flex flex-row mx-5 my-2 justify-end'>
        <select id="countries" class="bg-gray-50 border border-sunrise-300 text-gray-900 text-sm rounded-md no-ring block w-[10rem] p-2.5 dark:bg-midnight-700 dark:border-midnight-700 dark:text-white ">
          <option selected>Sortuj po</option>
          <option value="newest">Najnowsze</option>
          <option value="oldest">Najstarsze</option>
          <option value="highest">Najlepiej oceniane</option>
          <option value="lowest">Najgorzej oceniane</option>
        </select>
        </div>
        <div className='flex flex-col mx-5 my-2 w-3/4 px-2'>
          <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
          <Review name="Eliza Ka" score={5} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
          <Review name="Lola Maolaa" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
          <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
          <Review name="Ella Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />         
        <button className='w-max font-light text-sm my-2 text-orange-400 hover:text-orange-500'>Wyświetl wszystkie recenzje...</button>
        </div>
        
      </div>
      <div className='flex flex-col px-5 py-8 my-5 bg-sunrise-100 dark:bg-midnight-800 dark:text-white'>
        <h1 className='text-2xl font-semibold mx-5 my-2'>Polecane produkty</h1>
        <div className='flex flex-col max-w-full my-2'>
            <Carousel cols={5} rows={1} gap={30}>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
              <Carousel.Item>
              <BookItemCarousel 
              title="Harry Potter and Goblet of Fire"
              author="J.K. Rowling"
              price="34.99"
              score={4}
              url="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
              />
              </Carousel.Item>
             
            </Carousel>
        </div>
      </div>
  </div>
  )
}

export default ElectronicBook
