import React from 'react'
import {FaHeart} from 'react-icons/fa'
import {BsShareFill,BsArrowDownShort,BsArrowUpShort} from 'react-icons/bs'


function Book() {
  return (
    // <div className='flex flex-col px-10 py-5 bg-[#F0EEE2] min-h-screen'>
    //   <div className='grid grid-cols-2 gap-10'>
    //     <div className='relative'>
    //       <img src='https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg' className='w-auto h-80 object-contain absolute right-0 bottom-[-5rem] shadow-book' />
    //     </div>
    //     <div className='flex flex-col py-10 w-3/4 relative'>
    //       <h1 className='text-4xl font-semibold my-3'>Harry Potter and Philosopher's Stone</h1>
    //       <h2 className='font-[500] my-3 text-lg'>J.K. Rowling</h2>
    //       <p className='my-3'>Fantasy book about boy who was magician.</p>
    //       <div className='flex flex-row justify-between my-5 w-full absolute left-0 bottom-[-5rem]'>
    //         <button className='bg-midnight-950 text-white px-3 py-2 rounded-2xl text-sm'>Dodaj do koszyka</button>
    //         <div className='flex flex-row'>
    //           <button className='rounded-3xl bg-sunrise-200 h-10 w-10 flex items-center justify-center mx-1'><FaHeart /></button>
    //           <button className='rounded-3xl bg-sunrise-200 h-10 w-10 flex items-center justify-center mx-1'><BsShareFill /></button>
    //         </div> 
    //       </div>
    //     </div>
    //     </div>
    //   <div className='bg-[#FDFCF7] py-32'>
    //     <h1>hello</h1>
    //   </div>
    // </div>
    <div className='flex flex-col px-12 py-5 bg-[#F0EEE2] min-h-screen'>
    <div className='h-96 w-full relative'>
    <div className='grid grid-cols-[1fr_2fr_3fr] gap-10 h-96 w-full top-0'>
      <div className='flex flex-col justify-center items-center'>
        <button className='text-4xl rounded-3xl my-1 hover:bg-sunrise-100'><BsArrowUpShort /></button>
        <button className='text-4xl rounded-3xl my-1 hover:bg-sunrise-100'><BsArrowDownShort /></button>
      </div>
      <img src='https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg' className='h-96 w-auto object-contain justify-self-end shadow-book' />
      <div className='flex flex-col w-3/4 relative'>
      <h1 className='text-4xl font-semibold my-3'>Harry Potter and Philosopher's Stone</h1>
           <h2 className='font-[500] my-3 text-lg'>J.K. Rowling</h2>
          <p className='my-3'>Fantasy book about boy who was magician.</p>
          <div className='flex flex-row justify-between my-5 w-full absolute bottom-0'>
            <button className='bg-midnight-950 text-white px-3 py-2 rounded-2xl text-sm'>Dodaj do koszyka</button>
            <div className='flex flex-row'>
              <button className='rounded-3xl bg-sunrise-200 h-10 w-10 flex items-center justify-center mx-1'><FaHeart /></button>
              <button className='rounded-3xl bg-sunrise-200 h-10 w-10 flex items-center justify-center mx-1'><BsShareFill /></button>
            </div> 
          </div>
      </div>
    </div>
    </div>
    <div className='bg-[#FDFCF7] py-32'>
      <h1>hello</h1>
    </div>
  </div>
  )
}

export default Book
