import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/page-elements/PageHeader'
import { scrollTop } from '../../utils/functions/scrollTop'
import axiosClient from '../../utils/api/axiosClient'

function Categories() {
  const [elements, setElements] = useState([])
  const getCategoryElements = async () => {
    try {
      const response = await axiosClient.get(`/CategoryElements`)
      setElements(response.data)
      console.log(response.data);
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    scrollTop()
    getCategoryElements()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <PageHeader src='https://iili.io/JCJhvWX.png' title="Kategorie" content="Odkrywaj nowe lub swoje ulubione kategorie i najbardziej polecane książki, a napewno znajdziesz coś co chcesz czytać." />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
        {elements && elements.map((item,index) => {
          return (
            <Link to={`/kategorie${item.path}?id=${item.id}`} key={index} className='flex flex-col justify-center items-center px-10 py-5 bg-white dark:bg-midnight-800 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-midnight-700'>
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
