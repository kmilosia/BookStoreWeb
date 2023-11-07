import React from 'react'
import { BsArrowLeftShort, BsDot } from 'react-icons/bs'
import PopularNewsColumn from '../../components/news-elements/PopularNewsColumn'
import { Link } from 'react-router-dom'

function NewsItem() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
        <Link to='/wiadomosci' className='text-button-link my-3 w-max mx-7 flex flex-row items-center underline-hover-purple'><BsArrowLeftShort className='text-lg'/>Wróć do wszystkich wiadomości</Link>
        <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-48 lg:h-64 object-cover' />
            <div className='flex flex-row items-center mx-7 my-5 cursor-default font-medium text-purple-500 justify-center lg:justify-start text-sm'>
                <p>Jan Nowak</p>
                <BsDot />
                <p>23.05.2023</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-2 lg:gap-10 px-7 py-5 divide-border-top'>
            <div className='flex flex-col'>
                <article>
                    <h1 className='text-3xl font-medium text-start mb-4'>Nowe książki wydane w 2023 ranking Spellarium</h1>
                    <p>Britney Spears, ikona popu i ikona kultury popularnej, ogłosiła wydanie swojej najnowszej książki, która obiecuje
                        rzucić nowe światło na jej życie i karierę.</p>
                    <h3>Opis Książki</h3>
                    <p>Książka, zatytułowana "Moja Droga Do Wolności", jest osobistym wspomnieniem artystki, która dzieli się swoimi
                        doświadczeniami z fanami i czytelnikami. Opowiada ona o wyzwaniach, zmaganiach oraz jej drodze do odzyskania
                        kontroli nad swoim życiem.</p>
                    <h3>Reakcje Fanów</h3>
                    <p>Reakcje fanów na zapowiedź książki były entuzjastyczne. Wiele osób oczekuje, że książka rzuci nowe światło na
                        dotychczas nieznane aspekty życia Spears i pomoże zrozumieć jej doświadczenia związane z opieką prawną.</p>
                    <h3>Wydawca</h3>
                    <p>Książka jest wydawana przez jedno z wiodących wydawnictw i będzie dostępna na półkach od początku przyszłego
                        miesiąca.</p>
                    <h3>Podsumowanie</h3>
                    <p>Publikacja książki Britney Spears budzi wiele emocji i zainteresowania wśród fanów i społeczności medialnej.
                        Wszyscy oczekują z niecierpliwością na wydanie, aby poznać więcej szczegółów z życia tej ikony popu.</p>
                        <p>Publikacja książki Britney Spears budzi wiele emocji i zainteresowania wśród fanów i społeczności medialnej.
                        Wszyscy oczekują z niecierpliwością na wydanie, aby poznać więcej szczegółów z życia tej ikony popu.</p>
                        <p>Publikacja książki Britney Spears budzi wiele emocji i zainteresowania wśród fanów i społeczności medialnej.
                        Wszyscy oczekują z niecierpliwością na wydanie, aby poznać więcej szczegółów z życia tej ikony popu.</p>
                        <p>Publikacja książki Britney Spears budzi wiele emocji i zainteresowania wśród fanów i społeczności medialnej.
                        Wszyscy oczekują z niecierpliwością na wydanie, aby poznać więcej szczegółów z życia tej ikony popu.</p>
                </article>
                </div>
                <PopularNewsColumn />
            </div>
        </div>
    </div>
  )
}

export default NewsItem
