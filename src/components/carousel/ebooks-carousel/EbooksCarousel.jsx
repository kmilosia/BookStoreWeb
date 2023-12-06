import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../../../utils/objects/carousel-settings';
import EbookCarouselItem from './EbookCarouselItem';
import axiosClient from '../../../utils/api/axiosClient';

function EbooksCarousel(props) {
  const [books, setBooks] = useState([])
  const getBooks = async () => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?${props.filter}`)
        setBooks(response.data)
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() =>{ 
    getBooks()
  },[])
  return (
      <Slider {...settings}>
        {books.map((item, index) => {
            return (
                <EbookCarouselItem key={index} item={item} rental={props.rental}/>
            )
        })}
  </Slider>
  )
}

export default EbooksCarousel
