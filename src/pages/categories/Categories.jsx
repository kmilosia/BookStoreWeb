import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/page-elements/PageHeader'
import { scrollTop } from '../../utils/functions/scrollTop'
import { getCategoryElements } from '../../utils/api/categoryAPI'

function Categories() {
  scrollTop()
  const [loading, setLoading] = useState(true)
  const [elements, setElements] = useState([])
  useEffect(() => {
    getCategoryElements(setElements,setLoading)
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <PageHeader src='https://iili.io/JCJhvWX.png' title="Kategorie" content="Odkrywaj nowe lub swoje ulubione kategorie i najbardziej polecane książki, a napewno znajdziesz coś co chcesz czytać." />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
          {loading ?
          <div className='rounded-md animate-pulse bg-white dark:bg-midnight-900 col-span-3 h-96'></div> :
          elements?.map((item,index) => {
          return (
            <Link to={`/kategorie/${item.path}?categoryId=${item.categoryID}&id=${item.id}`} key={index} className='flex flex-col justify-center items-center px-10 py-5 bg-white dark:bg-midnight-800 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-midnight-700'>
                <img src={item.logo} className='w-2/3 h-auto object-contain' />
                <h1 className='text-2xl font-semibold mt-5'>{item.categoryName}</h1>
            </Link>
        )
        })}
        </div>
      </div>
    </div>
  )
}

export default Categories
