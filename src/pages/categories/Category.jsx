import React, { useEffect, useState } from 'react'
import { scrollTop } from '../../utils/functions/scrollTop'
import { useParams, useSearchParams } from 'react-router-dom'
import PageHeader from '../../components/page-elements/PageHeader'
import BooksCarousel from '../../components/carousel/books-carousel/BooksCarousel'
import axiosClient from '../../utils/api/axiosClient'
import EbooksCarousel from '../../components/carousel/ebooks-carousel/EbooksCarousel'

function Category() {
  const [params, setParams] = useSearchParams()
  const categoryID = params.get('id')
  const [category, setCategory] = useState({})
  const getCategory = async () => {
    try {
      const response = await axiosClient.get(`/CategoryElements/${categoryID}`)
      setCategory(response.data)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    scrollTop()
  },[])
  useEffect(() => {
    getCategory()
  },[categoryID])
  return (
    <div className='default-page-wrapper'>
    {category &&
    <div className='default-page-container'>
      <PageHeader src={category.imageURL} title={category.categoryName} content={category.content} />
      <div className='flex flex-col divide-border-top'>
        <h1 className='carousel-header'>Najpopularniejsze książki</h1>
        <BooksCarousel filter={`numberOfElements=10&sortBy=popular&formIds=1&categoryIds=${categoryID}`}/>
        <h1 className='carousel-header'>Najnowsze książki</h1>
        <BooksCarousel filter={`numberOfElements=10&sortOrder=desc&formIds=1&categoryIds=${categoryID}`}/>
        <h1 className='carousel-header'>Najpopularniejsze ebooki</h1>
        <BooksCarousel filter={`numberOfElements=10&sortBy=popular&formIds=2&categoryIds=${categoryID}`}/>
        <h1 className='carousel-header'>Najnowsze ebooki</h1>
        <EbooksCarousel filter={`numberOfElements=10&sortOrder=desc&formIds=2&categoryIds=${categoryID}`}/>
      </div>
      </div>
    }
    </div>
  )
}

export default Category
