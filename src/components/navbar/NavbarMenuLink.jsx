import React from 'react'
import { Link } from 'react-router-dom'

function NavbarMenuLink(props) {
  return (
    <Link to={props.path} className=' mx-3 text-lg lg:text-sm my-2 lg:my-0 font-semibold text-midnight-950 transition-all hover:text-purple-500 dark:text-midnight-50 dark:hover:text-purple-500'>{props.title}</Link>
  )
}

export default NavbarMenuLink
