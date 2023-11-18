import React from 'react'

function SkipStepButton(props) {
  return (
    <button type='button' onClick={props.onClick} className='absolute bottom-5 right-5 text-white flex items-center underline-hover'>
        <p className='text-sm'>Pomiń</p>
    </button>
  )
}

export default SkipStepButton
