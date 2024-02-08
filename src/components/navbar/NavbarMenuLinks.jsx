import React, { useEffect, useState } from 'react'
import NavbarMenuLink from './NavbarMenuLink'
import { getLinks } from '../../utils/api/navbarAPI'

function NavbarMenuLinks({onClick}) {
  const [links, setLinks] = useState([])
  useEffect(() => {
    getLinks(setLinks)
  },[])
  return (
    <>
    {links && links.map((item,index)=> {
      return (
        <NavbarMenuLink key={index} onClick={onClick} path={item.path} title={item.name} />
      )
    })}
  </>
  )
}

export default NavbarMenuLinks
