import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

function ProductImages({item}) {
    const [imageShow, setImageShow] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-5 my-2 gap-5 lg:gap-10'>
        {item && item.map((image, index) => (
            <button type='button' onClick={() => {setCurrentImage(image);setImageShow(true)}} key={index} className='h-80 w-full rounded-md border-transparent border-2 hover:border-purple-400 cursor-pointer'>
                <img src={image.imageURL} className={`h-full w-full object-cover rounded-md`} />
            </button>
        ))}                  
    </div>
    {imageShow &&
    <div className='fixed z-[200000] bottom-0 left-0 w-screen h-[90vh] bg-black/80 dark:text-white flex justify-center items-start lg:items-center'>
        <div className='w-full h-full flex flex-col p-10 bg-white dark:bg-midnight-800'>
            <div className='justify-end flex flex-row items-center'>
                <button onClick={() => {setImageShow(false)}} className='text-2xl'><IoClose /></button>
            </div>
            <img src={currentImage.imageURL} className='h-3/4 w-auto aspect-[3/4] rounded-md object-contain' alt={currentImage.title}/>
            <div className='flex flex-row items-center justify-center mt-4 h-1/4 py-5'>
            {item && item.map((image, index) => (
                <button type='button' onClick={() => {setCurrentImage(image)}} key={index} className='h-full w-auto object-contain aspect-[3/4] mx-2 rounded-md border-transparent border-2 hover:border-purple-400 cursor-pointer'>
                    <img src={image.imageURL} className={`h-full w-full object-cover rounded-md`} />
                </button>
            ))} 
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default ProductImages
