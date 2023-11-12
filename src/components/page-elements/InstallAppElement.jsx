import React from 'react'
import ebookImage from '../../assets/backgrounds/ebook-reading.jpg'

function InstallAppElement() {
  return (
    <div  className='rounded-md bg-white dark:bg-midnight-900 relative mt-4'>
        <img className='w-full h-48 object-cover object-center rounded-md' src={ebookImage} alt='Reading E-Book on mobile device' />
        <div className='h-full w-full px-2 absolute top-0 right-0 flex flex-col items-center justify-center text-white rounded-md dark:bg-midnight-900/60'>
          <h1 className='text-2xl lg:text-4xl text-center font-semibold my-4'>Zainstaluj naszą aplikację</h1>
          <div className='flex items-center justify-center'>
          <a target='_blank' href='https://www.apple.com/app-store'>
            <img className='h-10 w-auto mx-1' src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' />
          </a>
          <a target='_blank' href='https://play.google.com/store/games?hl=en&gl=US'>
            <img className='h-10 w-auto mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png' />
          </a>
        </div>
        </div>
    </div>
  )
}

export default InstallAppElement
