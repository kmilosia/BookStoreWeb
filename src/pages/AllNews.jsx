import React from 'react'
import NewsCell from '../components/page-elements/NewsCell'

function AllNews() {
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
            <h1>Wiadomości</h1>
            <div className='flex flex-row'>
                <select>
                    <option value=''>Sortuj według..</option>
                    <option value='newest'>Najnowsze</option>
                    <option value='oldest'>Najstarsze</option>
                    <option value='popular'>Najpopularniejsze</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-3'>
            <NewsCell />
        </div>
      </div>
    </div>
  )
}

export default AllNews
