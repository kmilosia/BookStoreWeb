import React from 'react'
import { BsDot } from 'react-icons/bs'
import NewsCell from '../components/page-elements/NewsCell'
import LatestNewsCell from '../components/page-elements/LatestNewsCell'

function NewsItem() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col'>
        <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-48 lg:h-64 object-cover' />
            <h1 className='text-3xl mt-5 mb-2 mx-5 font-[500] text-center lg:text-start'>Nowe książki wydane w 2023 ranking Spellarium</h1>
            <div className='flex flex-row items-center mx-5 mb-2 font-light text-orange-400 justify-center lg:justify-start text-sm'>
                <p>Jan Nowak</p>
                <BsDot />
                <p>23.05.2023</p>
            </div>
            <div className='divider' />
            <div className='grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-2 lg:gap-5 px-5 py-3'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed illum doloremque eligendi inventore qui maiores delectus repudiandae corrupti facilis atque voluptatem molestias laborum recusandae eos maxime perspiciatis voluptate quas.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem corrupti possimus! Iste, delectus. Iure iste aut eligendi ratione, recusandae doloribus dolorum natus ullam! Incidunt commodi fugiat ipsam maxime.</p>
                </div>
                <div className='flex flex-col'>
                <div className='divider lg:hidden' />
                <h3 className='text-lg lg:text-base font-semibold'>Popularne wiadomości</h3>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
                <LatestNewsCell title="Some title"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NewsItem
