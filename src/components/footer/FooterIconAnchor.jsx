import React from 'react'

function FooterIconAnchor(props) {
  return (
    <a href={props.path} target='_blank' className='my-1 mr-3 text-2xl md:text-lg hover:text-purple-500'><i className={props.url}></i></a>
  )
}

export default FooterIconAnchor
