import React from 'react'
import LatestNewsElement from './LatestNewsElement'

function PopularNewsColumn() {
  return (
    <div className='flex flex-col divide-border-top lg:border-none'>
        <h2 className='news-page-h2'>Popularne wiadomości</h2>
        <LatestNewsElement title="Britney Spears w top 10 najlepiej sprzedających się książek" imgURL='https://variety.com/wp-content/uploads/2023/01/britneyspears.png'/>
        <LatestNewsElement title="Britney Spears w top 10 najlepiej sprzedających się książek" imgURL='https://variety.com/wp-content/uploads/2023/01/britneyspears.png'/>
        <LatestNewsElement title="Britney Spears w top 10 najlepiej sprzedających się książek" imgURL='https://variety.com/wp-content/uploads/2023/01/britneyspears.png'/>
        <LatestNewsElement title="Britney Spears w top 10 najlepiej sprzedających się książek" imgURL='https://variety.com/wp-content/uploads/2023/01/britneyspears.png'/>
    </div>
  )
}

export default PopularNewsColumn
