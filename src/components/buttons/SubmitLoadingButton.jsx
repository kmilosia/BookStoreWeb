import React from 'react'
import Spinner from '../elements/Spinner'

function SubmitLoadingButton({loading,title}) {
  return (
    <button type='submit' className='purple-button w-full'>
        {loading ?
        <Spinner /> : <span>{title}</span>
        }
    </button>
  )
}

export default SubmitLoadingButton
