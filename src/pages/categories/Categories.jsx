import React from 'react'
import { Link } from 'react-router-dom'
import {categoryData} from '../../utils/data'
import categoryImage from '../../assets/pages/categories-image.png'
import PageHeader from '../../components/page-elements/PageHeader'


function Categories() {
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <PageHeader src={categoryImage} title="Kategorie" content="Odkrywaj nowe lub swoje ulubione kategorie i najbardziej polecane książki, a napewno znajdziesz coś co chcesz czytać." />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
        {categoryData.map((item,index) => {
          let title = item.title
          title = title.replace(/ /g, "-");
          return (
            <Link to={`/kategorie/${title}`} key={index} className='flex flex-col justify-center items-center px-10 py-5 bg-white dark:bg-midnight-800 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-midnight-700'>
                <img src={item.logo} className='w-2/3 h-auto object-contain' />
                <h1 className='text-2xl font-semibold mt-5'>{item.title}</h1>
            </Link>
        )
        })}
        </div>
      </div>
    </div>
  )
}

export default Categories
