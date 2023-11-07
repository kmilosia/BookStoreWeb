import React from 'react'

function FooterColumn(props) {
  return (
    <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
        <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>{props.name}</h2>
    </div> 
  )
}

export default FooterColumn
