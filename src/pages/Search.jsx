import React from 'react'
import Select from '../components/elements/Select'
import BookElement from '../components/page-elements/BookElement'
import search from '../assets/search.png'
import {HiOutlineSearch} from 'react-icons/hi'

function Search() {
    const sortOptions = [
        {value: 'latest', label: 'Najnowsze'},
        {value: 'oldest', label: 'Najstarsze'},
        {value: 'popular', label: 'Popularne'},
        {value: 'rated', label: 'Najlepiej oceniane'},
    ]
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col py-5 px-5'>
        <h1 className='text-xl font-semibold dark:text-white'>Wyniki wyszukiwania:</h1>
        <p>25 rezultatów</p>
        <div className='divider' />
        <div className='flex flex-col w-full justify-center items-center py-5'>
          <img src={search} className='w-1/3 h-auto object-contain'/>
          <h1 className='text-2xl'>Nie znaleziono takich wyników wyszukiwania</h1>
          <p className='my-2'>Spróbuj wpisać inną frazę wyszukiwania</p>
          <div className='relative w-2/5 justify-center inline-block px-2 my-2'>
              <input className='w-full rounded-md pl-4 pr-8 py-2 text-sm transition-colors text-midnight-950 border-2 border-sunrise-300 dark:border-midnight-700 no-ring dark:text-midnight-50 bg-white dark:bg-midnight-800' placeholder='Szukaj książek...' type='text'/>
              <span className='absolute top-1/2 right-[20px] translate-y-[-50%] text-lg cursor-pointer text-midnight-400 hover:text-midnight-700 dark:hover:text-midnight-200'><HiOutlineSearch /></span>
          </div>
        </div>
        {/* <div className='flex flex-row justify-end'>
            <div className='w-full lg:w-1/5'>
            <Select sortOptions={sortOptions}/>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
        </div> */}
      </div>
    </div>
  )
}

export default Search
