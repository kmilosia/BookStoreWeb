import React, { useEffect, useState } from 'react'
import FooterLink from './footer/FooterLink'
import FooterIconAnchor from './footer/FooterIconAnchor'
import FooterAnchor from './footer/FooterAnchor'
import FooterImage from './footer/FooterImage'
import axiosClient from '../utils/api/axiosClient'
import FooterColumn from './footer/FooterColumn'

function Footer() {
  const [footerColumns, setFooterColumns] = useState([])
  const getFooterColumns = async() => {
    try{
        const response = await axiosClient.get(`/FooterColumns`)
        setFooterColumns(response.data)
      }catch(err){
        console.error(err)
    }  
  }
  useEffect(() => {
    getFooterColumns()
  },[])
  return (
    <footer className='flex flex-col items-center justify-center w-full bg-midnight-50 dark:bg-midnight-950 divide-border-top'>
      <div className='w-full flex flex-col px-2 md:px-10 lg:px-16 pb-10 pt-5'>      
      <div className='w-full footer-layout-sm md:footer-layout-md lg:footer-layout-lg default-text py-0 md:py-10'>

        {/* {footerColumns.map(item => {
           if (item.position >= 1  && item.position <= 3){
            return (
              <FooterColumn key={item.id} name={item.name} position={item.position} columnId={item.id} />
            )
          }
        })} */}

        <div className='flex flex-col items-center md:items-start'>

            <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Social Media</h2>
                <div className='flex flex-row'>
                  <FooterIconAnchor path='www.tiktok.com' url='fa-brands fa-tiktok' />
                  <FooterIconAnchor path='www.tiktok.com' url='fa-brands fa-instagram' />
                  <FooterIconAnchor path='www.tiktok.com' url='fa-brands fa-facebook' />
                  <FooterIconAnchor path='www.tiktok.com' url='fa-brands fa-x-twitter' />
                  <FooterIconAnchor path='www.tiktok.com' url='fa-brands fa-pinterest' />
                </div>
            </div>

            <div className='flex flex-col py-2 md:py-5 items-center md:items-start'>
            <h2 className='text-2xl md:text-lg font-semibold my-4 md:my-2 cursor-default'>Aplikacje Mobilne</h2>
                <div className='flex flex-col lg:flex-row items-center md:items-start lg:items-center my-2 md:my-0'>
                  <FooterAnchor path='www.apple.com/app-store/' url='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' />
                  <FooterAnchor path='www.play.google.com/' url='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' />
                </div>
            </div>

        </div>

      </div>
      <div className='flex flex-col md:flex-row justify-between items-start lg:items-center w-full pt-10 border-t-[1px] border-midnight-200 dark:border-midnight-800'>
        <div className='flex flex-row flex-wrap justify-center md:justify-normal'>
            <FooterImage url='https://iili.io/JBKaidb.png' />
            <FooterImage url='https://iili.io/JBKYQVt.png' />
            <FooterImage url='https://iili.io/JBKYLxI.png' />
            <FooterImage url='https://iili.io/JBKYiDN.png' />
            <FooterImage url='https://iili.io/JBKY6RR.png' />
            <FooterImage url='https://iili.io/JBKY4Hv.png' />
        </div>
        <p className='text-sm mt-5 md:mt-0 text-center md:text-start text-midnight-700 dark:text-midnight-500 cursor-default'>&copy; 2023 Spellarium Sp. z.o.o. Wszystkie prawa zastrzeżone</p> 
      </div>
      </div>
    </footer>
  )
}

export default Footer
