import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRentBook } from '../../store/rentSlice';
import { showLoginMessage } from '../../store/loginPopupSlice';

function RentButton({item}) {
  const dispatch = useDispatch()
  const {isAuth} = useSelector((state) => state.user)
  const handleRentButton = () => {
    if(isAuth){
        const newItem = {
            authors: item.authors,
            formId: item.formId,
            id: item.id,
            imageURL: item.imageURL,
            title: item.title,
            fileFormat: "Demo format"
        }
        dispatch(addRentBook(newItem))
    }else{
        dispatch(showLoginMessage({title: 'Zaloguj się do swojego konta aby móc wypożyczać książki!'}))
    }
  }
  return (
    <button onClick={handleRentButton} className='rounded-bordered-purple-button rounded-md items-center justify-center my-1'>Wypożycz</button>
  )
}

export default RentButton
