import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { showMessage } from '../store/messageSlice';
import Spinner from '../components/elements/Spinner';
import {addReview} from '../utils/api/reviewsAPI'

function ReviewModal({setIsReviewed, bookItemId}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [textInput, setTextInput] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(null)
  
    const handleInput = (e) => {
        setTextInput(e.target.value)
    }
    const handleAddReview = () => {
        setLoading(true)
        let newErrors = {}
        if(textInput === ''){
            newErrors = { ...newErrors, input: 'Napisz swoją recenzję!' };
        }
        if(!rating){
            newErrors = { ...newErrors, rating: 'Oceń książkę!' };
        }
        setErrors(newErrors)
        if(Object.keys(newErrors).length === 0){
            const item = {
                content: textInput,
                scoreId: rating,
                bookItemId: bookItemId,
            }
            addReview(bookItemId, item, setLoading, setSuccess)
        }
    }
    useEffect(() => {
        if(success){
            setIsReviewed(true)
            dispatch(showMessage({title: "Recenzja została dodana!"}))
        }else if(success === false){
            dispatch(showMessage({title: "Nie można było dodać recenzji!", type: 'warning'}))
        }
    },[success])
  return (
    <div className='flex flex-col w-full mt-auto'>
        <p className='text-lg'>Oceń książkę</p>
        <div className='flex my-2'>
        {[...Array(5)].map((star,index) => {
            const currentRating = index + 1
            return(
                <label>
                    <input type='radio' name='rating' value={currentRating} onClick={() => {setRating(currentRating); console.log(currentRating);}} className='hidden'/>
                    <AiFillStar size={24}
                    className={`cursor-pointer ${(hover || rating) >= currentRating ? 'text-yellow-400' : 'text-gray-300'}`}        
                    onMouseEnter={() => {setHover(currentRating)}}
                    onMouseLeave={() => {setHover(null)}}
                    />
                </label>
            )
        })}
        </div>
        {errors.rating && <p className='error-text'>{errors.rating}</p>}
        <textarea rows={3} className='resize-none my-1 form-input focus:border-purple-400' onChange={handleInput} placeholder='Napisz swoją recenzję...'/>
        {errors.input && <p className='error-text'>{errors.input}</p>}
        <div className='grid grid-cols-2 gap-3 mt-2'>
            <button onClick={handleAddReview} type='submit' className='purple-button w-full'>
                {loading ?
                <Spinner /> : <span>Dodaj recenzję</span>
                }
            </button>
            <button onClick={() => {setIsReviewed(false)}} className='bordered-purple-button w-full'>Wróć</button>
        </div>
    </div>
  )
}

export default ReviewModal
