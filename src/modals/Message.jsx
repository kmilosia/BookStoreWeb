import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { hideMessage } from '../store/messageSlice';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
      <div className='fixed bottom-2 left-2 h-auto w-full z-[200000] px-5'>
        <div className='w-full h-max grid grid-cols-[max-content_auto_max-content] bg-green-400 py-5 px-10 shadow-md rounded-md'>
        <IoMdCheckmarkCircleOutline className='text-2xl text-green-900'/>
        <div className='w-full flex justify-center items-center cursor-default'>
            <h1 className='font-semibold text-green-900'>{messageTitle}</h1>
        </div>
        <button className='flex justify-end items-center' onClick={() => dispatch(hideMessage())}><AiOutlineClose className='text-xl transition-all text-green-800 hover:text-green-900'/></button>
        </div>
      </div>
    )
  )
}

export default Message
