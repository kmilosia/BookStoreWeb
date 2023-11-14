import React from 'react'
import { Link } from 'react-router-dom'

function SkipStepButton(props) {
  return (
    <Link to={`/dostep/rejestracja/${props.path}`} className='absolute bottom-3 right-5 text-white flex items-center underline-hover'>
        <p className='text-xs'>Pomiń</p>
    </Link>
  )
}

export default SkipStepButton
