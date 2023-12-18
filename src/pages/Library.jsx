import React, { useEffect, useState } from 'react'
import RentedBooks from '../components/library/RentedBooks'
import PurchasedBooks from '../components/library/PurchasedBooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Library() {
    const navigate = useNavigate()
    const {isAuth} = useSelector((state) => state.user)
    const [showRented, setShowRented] = useState(true)
    useEffect(() => {
        if(!isAuth){
          navigate('/')
        }
      },[])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
                <h1 className='text-3xl font-semibold'>Moja biblioteka</h1>
                <div className='flex items-center w-max justify-between mt-5 lg:mt-0'>
                    <button onClick={() => {setShowRented(true)}} className={`rounded-bordered-purple-button mr-3 ${showRented && 'bg-purple-400 text-white'}`}>Wypożyczone</button>
                    <button onClick={() => {setShowRented(false)}} className={`rounded-bordered-purple-button ${!showRented && 'bg-purple-400 text-white'}`}>Kupione</button>
                </div>
            </div>
            {showRented ? <RentedBooks /> : <PurchasedBooks />}
        </div>
    </div>
  )
}

export default Library
