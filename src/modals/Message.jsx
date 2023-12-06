import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { hideMessage } from '../store/messageSlice';

const Message = () => {
  const { showMessage, messageTitle } = useSelector((state) => state.message);
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
      <div className='fixed bottom-0 left-0 h-max w-screen grid grid-cols-[auto_max-content] bg-green-400 py-5 px-10 shadow-md z-[10000]'>
        <div className='w-full flex justify-center items-center cursor-default'>
            <h1 className='font-medium text-midnight-900 dark:text-white'>{messageTitle}</h1>
        </div>
        <button className='flex justify-end' onClick={() => dispatch(hideMessage())}><AiOutlineClose className='text-xl transition-all text-dracula-500 hover:text-dracula-600 dark:hover:text-dracula-400'/></button>
      </div>
    )
  )
}

export default Message
