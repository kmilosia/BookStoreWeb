import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../../components/page-elements/PageHeader'
import BooksCarousel from '../../components/carousel/books-carousel/BooksCarousel'
import EbooksCarousel from '../../components/carousel/ebooks-carousel/EbooksCarousel'
import { getCategoryElement } from '../../utils/api/categoryAPI'
import PageLoader from '../../components/elements/PageLoader'

function Category() {
  const [params, setParams] = useSearchParams()
  const categoryID = params.get('categoryId')
  const id = params.get('id')
  const [category, setCategory] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getCategoryElement(id, setCategory,setLoading )
  },[categoryID])
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
    {loading ? <PageLoader /> :
    category && 
      <>
      <PageHeader src={category.imageURL} title={category.categoryName} content={category.content} />
      <div className='flex flex-col divide-border-top'>
        <BooksCarousel title="Najpopularniejsze książki" filter={`numberOfElements=10&sortBy=popular&formIds=1&categoryIds=${categoryID}`}/>
        <BooksCarousel title="Najnowsze książki" filter={`numberOfElements=10&sortOrder=desc&formIds=1&categoryIds=${categoryID}`}/>
        <EbooksCarousel title="Najpopularniejsze ebooki" filter={`numberOfElements=10&sortBy=popular&formIds=2&categoryIds=${categoryID}`}/>
        <EbooksCarousel title="Najnowsze ebooki" filter={`numberOfElements=10&sortOrder=desc&formIds=2&categoryIds=${categoryID}`}/>
      </div>
      </>
    }
    </div>
    </div>
  )
}

export default Category
