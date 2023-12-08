import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from '../../../utils/objects/carousel-settings'
import LibraryBookCarouselItem from './LibraryBookCarouselItem';

const booksData = [
  {id: 1, title: "Harry Potter i Więzień Azkabanu",price: 59.99, score: 5, author: 'J.K. Rowling', url: 'https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg'},
  {id: 2, title: "Wiedźmin. Sezon Burz",price: 39.99, score: 4, author: 'Andrzej Sapkowski', url: 'https://smakliter.pl/Photos/10/LARGE/000025/wiedzmin-sezon-burz.jpg'},
  {id: 3, title: "Ogień i Krew. Gra o Tron. Część 1",price: 59.99, score: 4, author: 'George R.R. Martin', url: 'https://image.ceneostatic.pl/data/article_picture/f9/8e/fca2-c9c4-4c76-94f5-0799189bdcff_large.jpg'},
  {id: 4, title: "Harry Potter i Więzień Azkabanu",price: 59.99, score: 5, author: 'J.K. Rowling', url: 'https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg'},
  {id: 5, title: "Wiedźmin. Sezon Burz",price: 39.99, score: 4, author: 'Andrzej Sapkowski', url: 'https://smakliter.pl/Photos/10/LARGE/000025/wiedzmin-sezon-burz.jpg'},
  {id: 6, title: "Ogień i Krew. Gra o Tron. Część 1",price: 59.99, score: 4, author: 'George R.R. Martin', url: 'https://image.ceneostatic.pl/data/article_picture/f9/8e/fca2-c9c4-4c76-94f5-0799189bdcff_large.jpg'},
]
function LibraryCarousel(props) {
  return (
    <Slider {...settings}>
        {booksData.map((item, index) => {
            return (
                <LibraryBookCarouselItem key={index} title={item.title} url={item.url} author={item.author} id={item.id}/>
            )
        })}
  </Slider>
  )
}

export default LibraryCarousel
