import React from 'react'
import { Link } from 'react-router-dom'

function FooterLink(props) {
  return (
      <Link to={props.path} className='my-1 text-xl md:text-base hover:text-purple-500'>{props.name}</Link>
  )
}

export default FooterLink
