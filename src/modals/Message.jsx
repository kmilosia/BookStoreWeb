import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { hideMessage } from '../store/messageSlice';

const Message = () => {
  const { showMessage, messageTitle, messageType } = useSelector((state) => state.message);
  const dispatch = useDispatch()
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage())
      }, 3000)
    }
  }, [showMessage, dispatch])

  return (
    showMessage && (
      <div className='fixed bottom-2 left-2 h-auto w-full z-[200000] px-5'>
        <div className={`w-full h-max grid grid-cols-[auto_max-content] ${messageType === 'warning' ? 'bg-red-500' : 'bg-green-500'} py-5 px-10 shadow-md rounded-md`}>
        <div className='w-full flex justify-center items-center cursor-default'>
            <p className='font-semibold text-white'>{messageTitle}</p>
        </div>
        <button className='flex justify-end items-center' onClick={() => dispatch(hideMessage())}><AiOutlineClose className='text-xl transition-all text-white hover:text-gray-100'/></button>
        </div>
      </div>
    )
  )
}

export default Message
