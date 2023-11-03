import React from 'react'
import NewsCell from '../components/page-elements/NewsCell'

function AllNews() {

  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col px-3 lg:px-5'>
        <div className='flex flex-col lg:flex-row justify-between my-1 lg:my-5'>
            <h1 className='text-xl lg:text-3xl font-[500] my-2 lg:my-0'>Wszystkie wiadomości</h1>
            <select id="countries" class="bg-white border border-sunrise-300 text-gray-900 text-sm rounded-lg block dark:bg-midnight-800 dark:border-midnight-700 dark:placeholder-gray-400 dark:text-white">
              <option selected>Sortuj po..</option>
              <option value="latest">Najnowsze</option>
              <option value="oldest">Najstarsze</option>
              <option value="popular">Najpopularniejsze</option>
            </select>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
            <NewsCell title="Some random title"/>
            <NewsCell title="Some random title"/>
            <NewsCell title="Some random title"/>
            <NewsCell title="Some random title"/>
            <NewsCell title="Some random title"/>
            <NewsCell title="Some random title"/>
        </div>
      </div>
    </div>
  )
}

export default AllNews
