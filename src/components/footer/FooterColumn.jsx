import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import FooterLink from './FooterLink'
import FooterAnchor from './FooterAnchor'
import FooterImage from './FooterImage'
import FooterIconAnchor from './FooterIconAnchor'

function FooterColumn(props) {
  const [footerLinks, setFooterLinks] = useState([])
  const getFooterLinks = async() => {
    try{
        const response = await axiosClient.get(`/FooterLinks/column-id/${props.columnId}`)
        setFooterLinks(response.data)
        console.log(response.data);
      }catch(err){
        console.error(err)
    }  
  }
  useEffect(() => {
    console.log(props.columnId);
    getFooterLinks()
  },[])
  return (
    <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
        <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>{props.name}</h2>
        {footerLinks && footerLinks.map(item => {
          if(item.htmlObject === 'Link'){
            return (
              <FooterLink key={item.id} name={item.name} path={item.path}/>
            )
          }else if(item.htmlObject === 'Anchor'){
            return (
              <FooterAnchor key={item.id} path={item.path} url={item.url}/>
            )
          }else if(item.htmlObject === 'Image'){
            return(
              <FooterImage key={item.id} url={item.url}/>
            )
          }else{
            return(
              <FooterIconAnchor key={item.id} path={item.path} url={item.url}/>
            )
          }
        })}
    </div> 
  )
}

export default FooterColumn
