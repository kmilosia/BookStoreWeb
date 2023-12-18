import React, { useEffect, useState } from 'react'
import FooterLink from './FooterLink'
import FooterAnchor from './FooterAnchor'
import FooterImage from './FooterImage'
import FooterIconAnchor from './FooterIconAnchor'
import { getFooterLinks } from '../../utils/api/footerAPI'

function FooterColumn(props) {
  const [footerLinks, setFooterLinks] = useState([])
  useEffect(() => {
    getFooterLinks(props.columnId, setFooterLinks)
  },[])
  return (
    <div className='flex flex-col items-center md:items-start my-3 md:my-0'>
        <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>{props.name}</h2>
        <div className={`flex flex-wrap items-center lg:items-start justify-center flex-${props.direction}`}>
        {footerLinks?.map((item,index) => {
          if(item.htmlObject === 'Link'){
            return (
              <FooterLink key={index} name={item.name} path={item.path}/>
            )
          }else if(item.htmlObject === 'Anchor'){
            return (
              <FooterAnchor key={index} path={item.path} url={item.url}/>
            )
          }else if(item.htmlObject === 'Image'){
            return(
              <FooterImage key={index} url={item.url}/>
            )
          }else{
            return(
              <FooterIconAnchor key={index} path={item.path} url={item.url}/>
            )
          }
        })}
      </div> 
    </div> 
  )
}

export default FooterColumn
