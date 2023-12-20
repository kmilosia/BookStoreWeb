import React, { useEffect, useState } from 'react'

function ProductImages({item}) {
    const [imageShow, setImageShow] = useState(false)
    const [imageId, setImageId] = useState(null)
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-5 my-2 gap-5 lg:gap-10'>
        {item && item.map((image, index) => (
            <button type='button' onClick={() => {setImageId(image.id);setImageShow(true)}} key={index} className='h-96 w-full rounded-md border-transparent border-2 hover:border-purple-400 cursor-pointer'>
                <img src={image.imageURL} className={`h-full w-full object-cover rounded-md`} />
            </button>
        ))}                  
    </div>
    {imageShow &&
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-start lg:items-center'>
        <div className='w-full lg:w-2/3 h-max flex flex-col py-5 px-10 bg-white dark:bg-midnight-800'>
            <h1>Zdjęcia</h1>
            <button onClick={() => {setImageShow(false)}}>Zamknij</button>
        </div>
    </div>
    }
    </>
  )
}

export default ProductImages
