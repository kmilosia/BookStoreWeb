import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import Spinner from '../components/elements/Spinner';
import { useDispatch } from 'react-redux';
import { addReview } from '../utils/api/reviewsAPI';
import { showMessage } from '../store/messageSlice';

function AddReviewModal({setIsReviewed, bookItemId}) {
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
        let newErrors = {}
        if(textInput === ''){
            newErrors = { ...newErrors, input: 'Napisz swoją recenzję!' };
        }
        if(!rating){
            newErrors = { ...newErrors, rating: 'Oceń książkę!' };
        }
        setErrors(newErrors)
        if(Object.keys(newErrors).length === 0){
            setLoading(true)
            const item = {
                content: textInput,
                scoreId: rating,
                bookItemId: bookItemId,
            }
            addReview(item, setLoading, setSuccess)
        }
    }
    useEffect(() => {
        if(success){
            setIsReviewed(false)
            dispatch(showMessage({title: "Recenzja została dodana!"}))
        }else if(success === false){
            dispatch(showMessage({title: "Nie można było dodać recenzji!", type: 'warning'}))
        }
    },[success])
  return (
    <div className='fixed top-0 left-0 flex w-screen h-screen bg-black/50 items-center justify-center'>
    <div className='flex flex-col rounded-md bg-gray-100 dark:bg-midnight-800 p-5 w-5/6 lg:w-1/3'>
    <p className='text-xl font-medium'>Oceń książkę</p>
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
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 mt-2'>
        <button onClick={handleAddReview} type='submit' className='purple-button w-full'>
            {loading ?
            <Spinner /> : <span>Dodaj recenzję</span>
            }
        </button>
        <button onClick={() => {setIsReviewed(false)}} className='bordered-purple-button w-full'>Wróć</button>
    </div>
    </div>
</div>
  )
}

export default AddReviewModal
