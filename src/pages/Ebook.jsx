import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../utils/data';
import { FaHeart } from 'react-icons/fa';
import Stars from '../components/elements/Stars';
import { BsShareFill } from 'react-icons/bs';
import ReviewSummary from '../components/page-elements/ReviewSummary';
import Review from '../components/page-elements/Review';
import EbooksCarousel from '../components/carousel/ebooks-carousel/EbooksCarousel';

function Ebook() {
    const {id} = useParams()
    const productID = Number(id)
    const product = productsData.find((element) => element.id === productID );

  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col relative'>
        <img src={product.url} className='absolute h-96 w-full z-10 object-cover blur-sm' />
        <div className='w-full z-20 py-20 px-5 lg:px-10 2xl:px-48'>

            <div className='grid grid-cols-[1fr_3fr] gap-10'>
                <div className='h-auto w-full flex items-center justify-end'>
                    <img src={product.url} className='h-auto w-full object-contain rounded-md shadow-book' />
                </div>
                <div className='flex flex-col items-start py-10 px-10 bg-white/50 shadow-md dark:bg-midnight-900/70 backdrop-blur-md rounded-md'>
                    <h1 className='text-5xl font-bold my-1'>{product.title}</h1>
                    <h2 className='text-3xl my-1 font-semibold'>{product.author}</h2>
                    <h3 className='font-semibold text-xl my-1'>{product.form}</h3>
                    <Stars score={product.score}/>
                    <div className='flex my-4'>
                    <Link className='flex flex-col bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2'>
                        <h1 className='text-sm font-medium'>Ebook</h1>
                        <h1 className='text-xs font-light mt-1'>PDF </h1>
                        <h2 className='text-xs font-light mt-1'>59.99zł</h2>
                    </Link>
                    <Link className='flex flex-col bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2'>
                        <h1 className='text-sm font-medium'>Ebook</h1>
                        <h1 className='text-xs font-light mt-1'>EPUB </h1>
                        <h2 className='text-xs font-light mt-1'>59.99zł</h2>
                    </Link>
                    <Link className='flex flex-col bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2'>
                        <h1 className='text-sm font-medium'>Książka </h1>
                        <h1 className='text-xs font-light mt-1'>Okładka miękka </h1>
                        <h2 className='text-xs font-light mt-1'>49.99zł</h2>
                    </Link>
                    <Link className='flex flex-col bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2'>
                        <h1 className='text-sm font-medium'>Książka</h1>
                        <h1 className='text-xs font-light mt-1'>Okładka twarda</h1>
                        <h2 className='text-xs font-light mt-1'>25.99zł</h2>
                    </Link>
                    </div>
                    <div className='mt-auto w-full flex flex-col items-start'>
                    <div className='flex my-2'>
                        <h3 className='text-5xl font-bold'>{product.price}zł</h3>
                    </div>
                    <div className='flex justify-between my-2 w-full'>
                        <div className='flex'>
                            <button className='rounded-purple-button'>Wypożycz ebooka</button>
                            <button className='rounded-purple-button mx-2'>Dodaj do koszyka</button>
                        </div>
                        <div className='flex'>
                            <button className='rounded-3xl bg-purple-400 text-white h-10 w-10 flex items-center justify-center mx-1 hover:bg-purple-500'><FaHeart /></button>
                            <button className='rounded-3xl bg-purple-400 text-white h-10 w-10 flex items-center justify-center mx-1 hover:bg-purple-500'><BsShareFill /></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-[1fr_3fr] gap-10 my-10'>
                <div className='flex flex-col'>
                <h1 className='text-3xl font-medium my-5'>Informacje</h1>
                <div className='grid grid-cols-2 gap-5 h-max my-2'>
                    <div className=''>
                        <h3 className='font-medium'>Autor</h3>
                        <h4 className='font-light'>{product.author}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Wydawnictwo</h3>
                        <h4 className='font-light'>Wydawnictwo Znak</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Język produktu</h3>
                        <h4 className='font-light'>Polski</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Tłumaczenie</h3>
                        <h4 className='font-light'>{product.author}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Format pliku</h3>
                        <h4 className='font-light'>{product.form}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Język oryginalny</h3>
                        <h4 className='font-light'>Angielski</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Data wydania</h3>
                        <h4 className='font-light'>20-01-2019</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>ISBN</h3>
                        <h4 className='font-light'>783278372</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Liczba stron</h3>
                        <h4 className='font-light'>765</h4>
                    </div>
                    <div className='col-span-2'>
                    <h3 className='font-medium'>Kategorie</h3>
                    <div className='my-2 flex'>
                        <div className='mr-1 text-xs bg-purple-400 text-white rounded-full px-4 py-2'>
                            <h4>Fantasy</h4>
                        </div>
                        <div className='mr-1 text-xs bg-purple-400 text-white rounded-full px-4 py-2'>
                            <h4>Dla młodzieży</h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-medium my-5'>Opis</h1>
                    <p className='my-2 dark:text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, cumque sint.
                    Praesentium ab eaque eligendi aperiam. Atque in nemo cum hic maxime voluptates fugiat natus exercitationem, consectetur consequatur iste pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eaque officiis, eos tenetur
                    voluptatum tempore ratione, amet, fugiat cum iure qui. Asperiores, delectus enim?
                    </p>
                    <p className='my-2 dark:text-gray-200'>
                    Sint voluptate recusandae delectus nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, esse sequi eum autem asperiores cumque! Quibusdam aperiam,
                    quaerat sunt rerum porro praesentium voluptates optio reiciendis totam error fugit fuga veritatis!</p>
                    <p className='my-2 dark:text-gray-200'>
                    Sint voluptate recusandae delectus nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, esse sequi eum autem asperiores cumque! Quibusdam aperiam,
                    quaerat sunt rerum porro praesentium voluptates optio reiciendis totam error fugit fuga veritatis!</p>
                    <p className='my-2 dark:text-gray-200'>
                    Sint voluptate recusandae delectus nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, esse sequi eum autem asperiores cumque! Quibusdam aperiam,
                    quaerat sunt rerum porro praesentium voluptates optio reiciendis totam error fugit fuga veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore. Exercitationem ducimus at laboriosam officiis corrupti
                     laborum aut ad impedit enim nam. Ut, vero tenetur? Cum eius ea amet ipsam!</p>
                </div>
                <div className='col-span-2 flex flex-col'>
                    <h1 className='text-3xl font-medium'>Zdjęcia</h1>
                    <div className='grid grid-cols-7 grid-rows-2 my-2 gap-5'>
                    <img src={product.url} className='h-auto w-full object-contain rounded-md col-span-2 row-span-2' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    <img src={product.url} className='h-auto w-full object-contain rounded-md' />
                    </div>
                </div>
                <div className='col-span-2 flex flex-col'>
                <h1 className='text-3xl font-medium'>Recenzje</h1>
                <ReviewSummary />
                <h1 className='text-xl font-medium my-2'>Ostatnie recenzje</h1>
                <div className='grid grid-cols-2 gap-5 my-2'>
                    <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
                    <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
                    <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
                    <Review name="Monika Bella" score={4} content="nfioarnfrainfoarnif fnarofniar nfiaronf anifna anuaip famropfa wi w ia" date="23-02-2020" />
                </div>
                <button className='purple-button my-2 w-max self-center'>Wyświetl wszystkie recenzje</button>
                </div>
                <div className='col-span-2 flex flex-col'>
                <h1 className='text-3xl font-medium'>Podobne produkty</h1>
                <EbooksCarousel/>
                <h1 className='text-3xl font-medium mt-3'>Książki tego samego autora</h1>
                <EbooksCarousel/>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Ebook
