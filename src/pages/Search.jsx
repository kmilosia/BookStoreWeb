import React from 'react'
import Select from '../components/elements/Select'
import BookElement from '../components/page-elements/BookElement'

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
        <div className='flex flex-row justify-end'>
            <div className='w-full lg:w-1/5'>
            <Select sortOptions={sortOptions}/>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
            <BookElement title="Igrzyska Śmierci" score={3} price={29.99} author="Suzanne Collins" wishlisted={true} imgURL="https://ecsmedia.pl/c/igrzyska-smierci-w-pierscieniu-ognia-kosoglos-b-iext127043523.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Search
