import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../utils/api/axiosClient'
import { BsArrowLeftShort } from 'react-icons/bs'
import Review from '../components/page-elements/Review'
import { scrollTop } from '../utils/functions/scrollTop'

function Reviews() {
    const {id} = useParams()
    const newId = Number(id)
    const [reviews, setReviews] = useState([])
    const getReviews = async () => {
        try{
            const response = await axiosClient.get(`/BookItemReviews/Get-Product-Reviews?bookItemId=${newId}`)
            setReviews(response.data)
        }catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        getReviews()
    },[])
    useEffect(() => {
        scrollTop()
    },[])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <Link to={`/produkt/${newId}`} className='text-button-link text-base my-3 w-max mx-7 flex flex-row items-center underline-hover-purple'><BsArrowLeftShort className='text-lg'/>Wróć do produktu</Link>
            {reviews.length <= 0 ?
            <div className='flex flex-col justify-center items-center h-full'>
                <img src='https://iili.io/JT0PtrN.png' className='w-full lg:w-1/5 h-auto object-contain' />
                <h1 className='text-3xl font-semibold my-2'>Brak recenzji</h1>
                <p className='text-xl font-light'>Nie dodano jeszcze żadnych recenzji dla wybranej książki</p>
            </div>
            :
            <>
            <h1 className='text-3xl font-semibold'>Recenzje</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-2'>
                {reviews.map((item,index) => {
                    return(
                        <Review key={index} item={item} />
                    )
                })}
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Reviews
