import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

function PageTopScrollButton() {
  return (
    <button onClick={() => {window.scrollTo(0,0)}} className='fixed bottom-[4.5rem] lg:bottom-3 right-3 lg:right-5 flex items-center justify-center rounded-3xl p-2 text-xl z-[100] bg-midnight-950/50 text-white hover:bg-midnight-950 dark:bg-purple-400/30 dark:hover:bg-purple-600'>
      <FiArrowUp />
    </button>
  )
}

export default PageTopScrollButton
