import React from 'react'
import Spinner from '../elements/Spinner'

function SubmitLoadingButton({loading,title}) {
  return (
    <button type='submit' className='purple-button w-full flex items-center justify-center'>
        {loading ?
        <Spinner size={6}/> : <span>{title}</span>
        }
    </button>
  )
}

export default SubmitLoadingButton
