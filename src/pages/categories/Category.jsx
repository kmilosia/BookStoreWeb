import React, { useEffect, useState } from 'react'
import { scrollTop } from '../../utils/functions/scrollTop'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/page-elements/PageHeader'
import {categoryData} from '../../utils/data'
import BooksCarousel from '../../components/carousel/books-carousel/BooksCarousel'

function Category() {
    const { title } = useParams()
    const [category, setCategory] = useState('')
    useEffect(() => {
        scrollTop()
        let categoryTitle = title.replace(/-/g, ' ')
        let object = categoryData.find(o => o.title === categoryTitle)
        setCategory(object)
    },[])
  return (
    <div className='default-page-wrapper'>
    {category &&
    <div className='default-page-container'>
      <PageHeader src={category.src} title={category.title} content={category.content} />
      <div className='flex flex-col divide-border-top'>
        <h1 className='carousel-header'>Najpopularniejsze</h1>
        <BooksCarousel />
        <h1 className='carousel-header'>Najnowsze</h1>
        <BooksCarousel />
        <h1 className='carousel-header'>Najlepiej oceniane</h1>
        <BooksCarousel />
      </div>
      </div>
    }
    </div>
  )
}

export default Category
