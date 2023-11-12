import React from 'react'
import InfiniteCarouselBook from './InfiniteCarouselBook'

function InfiniteCarouselItem(props) {
  return (
    <div className={`flex items-center max-h-40 justify-center md:justify-start group-hover:pause-animation ${props.isReversed ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}>
        <InfiniteCarouselBook src="https://thatcovergirl.files.wordpress.com/2011/04/fitzgerald_tgg.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_BloodofElves-HC-scaled.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://thatcovergirl.files.wordpress.com/2011/04/fitzgerald_tgg.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600698670i/49259788.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://d-art.ppstatic.pl/kadry/k/r/1/b1/c4/5bb1f0cd9d443_o_large.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://www.creativindie.com/wp-content/uploads/2017/04/New-WOrld-299x449.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://juandahlmann.files.wordpress.com/2013/09/czaspogardy.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://thatcovergirl.files.wordpress.com/2011/04/fitzgerald_tgg.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600698670i/49259788.jpg" alt="Witcher" />
        <InfiniteCarouselBook src="https://www.norli.no/media/catalog/product/9/7/9780006479888_1.jpg?auto=webp&format=pjpg&width=728&height=910&fit=cover" alt="Witcher" />
        <InfiniteCarouselBook src="https://preview.redd.it/no-spoilers-asoiaf-spanish-new-edition-to-be-published-on-v0-t8syst2fz0ya1.png?width=2000&format=png&auto=webp&s=284f2ee5079e44de5a677d99dce91c0cb8992ee7" alt="Witcher" />
    </div>
  )
}

export default InfiniteCarouselItem
