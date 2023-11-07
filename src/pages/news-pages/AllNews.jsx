import React from 'react'
import NewsElement from '../../components/news-elements/NewsElement'

function AllNews() {
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <h1 className='text-3xl font-semibold'>Wiadomości</h1>
            <select className='sort-select'>
              <option value='default' selected>Domyślne</option>
              <option value="latest">Najnowsze</option>
              <option value="oldest">Najstarsze</option>
              <option value="popular">Najpopularniejsze</option>
            </select>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 my-5'>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
            <NewsElement title="George mówi że wyda książke a nadal cisza" imgURL='https://static.polityka.pl/_resource/res/path/aa/af/aaafa18f-574d-46b8-a40a-24e69375ab9d_f1400x900'/>
        </div>
      </div>
    </div>
  )
}

export default AllNews
