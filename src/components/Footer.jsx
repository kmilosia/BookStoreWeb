import React, { useEffect, useState } from 'react'
import FooterColumn from './footer/FooterColumn'
import { getFooterColumns } from '../utils/api/footerAPI'

function Footer() {
  const [footerColumns, setFooterColumns] = useState([])
  useEffect(() => {
    getFooterColumns(setFooterColumns)
  },[])
  return (
    <footer className='flex flex-col items-center justify-center w-full bg-midnight-50 dark:bg-midnight-900 divide-border-top'>
      <div className='w-full flex flex-col px-2 md:px-10 lg:px-16 pb-10 pt-5'>      
      <div className='w-full footer-layout-sm md:footer-layout-md lg:footer-layout-lg default-text py-0 md:py-10'>
        {footerColumns?.map((item,index) => {
           if (item.position >= 1  && item.position <= 3){
            return (
              <FooterColumn key={index} htmlObject={item.htmlObject} name={item.name} position={item.position} direction={item.direction} columnId={item.id} />
            )
          }
        })}
        <div className='flex flex-col items-center md:items-start'>
        {footerColumns?.map((item,index) => {
           if (item.position > 3  && item.position < 6){
            return (
              <FooterColumn key={index} htmlObject={item.htmlObject} name={item.name} position={item.position} direction={item.direction} columnId={item.id} />
            )
          }
        })}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-start lg:items-center w-full pt-10 border-t-[1px] border-midnight-200 dark:border-midnight-800'>
        {footerColumns?.map((item,index) => {
           if (item.position === 6){
            return (
              <FooterColumn key={index} htmlObject={item.htmlObject} position={item.position} direction={item.direction} columnId={item.id} />
            )
          }
        })}
        <p className='text-sm mt-5 md:mt-0 text-center md:text-start text-midnight-700 dark:text-midnight-500 cursor-default'>&copy; 2023 Spellarium Sp. z.o.o. Wszystkie prawa zastrzeżone</p> 
      </div>
      </div>
    </footer>
  )
}

export default Footer
