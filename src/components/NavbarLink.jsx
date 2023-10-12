import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLink(props) {
  function toggleMenu() {
    props.setIsMenuExpanded(true)
    props.setMenuCategory(props.key)
    console.log(props.id);
    console.log(props.menuCategory);
  }
  return (
    <Link to={props.path} onMouseOver={toggleMenu} onMouseLeave={()=>{props.setIsMenuExpanded(false)}}  className='mx-3 text-sm font-semibold text-midnight-950 transition-all hover:text-orange-600 dark:text-midnight-50 dark:hover:text-orange-600'>{props.title}</Link>
  )
}

export default NavbarLink
