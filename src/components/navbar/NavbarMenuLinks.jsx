import React, { useEffect, useState } from 'react'
import NavbarMenuLink from './NavbarMenuLink'
import axiosClient from '../../utils/api/axiosClient'

function NavbarMenuLinks({onClick}) {
  const [links, setLinks] = useState([])
  const getLinks = async () => {
    try{
        const response = await axiosClient.get(`/NavBarMenuLinks`)
        setLinks(response.data)

    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
    getLinks()
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
