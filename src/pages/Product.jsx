import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Stars from '../components/elements/Stars';
import ReviewSummary from '../components/page-elements/ReviewSummary';
import Review from '../components/page-elements/Review';
import { scrollTop } from '../utils/functions/scrollTop';
import axiosClient from '../utils/api/axiosClient';
import { convertDateDisplay } from '../utils/functions/convertDate';
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { showPopup } from '../store/cartPopupSlice';
import { showLoginMessage } from '../store/loginPopupSlice';
import { showMessage } from '../store/messageSlice';
import { addRentBook, showRentalModal } from '../store/rentSlice';

function Product() {
    const { isAuth } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const productID = Number(id)
    const [book, setBook] = useState({})
    const [books, setBooks] = useState([])
    const [reviews, setReviews] = useState([])
    const getBook = async () => {
        try{
            const response = await axiosClient.get(`/BookItems/Book-Details?bookItemId=${productID}`)
            setBook(response.data)
        }catch(err){
            console.error(err)
        }
    }
    const getBooks = async () => {
        try{
            const response = await axiosClient.get(`/BookItems/All-Books?bookId=${book.bookId}`)
            setBooks(response.data)
            console.log(response.data);
        }catch(err){
            console.error(err)
        }
    }
    const getReviews = async () => {
        try{
            const response = await axiosClient.get(`/BookItemReview/Get-Product-Reviews?bookItemId=${productID}&numberOfElements=4`)
            setReviews(response.data)
        }catch(err){
            console.error(err)
        }
    }
    const handleRentButton = () => {
        if(isAuth){
            const item = {
                authors: book.authors,
                formId: book.formId,
                id: book.id,
                imageURL: book.images[0].imageURL,
                title: book.bookTitle,
                fileFormat: book.fileFormatName
            }
            dispatch(addRentBook(item))
        }else{
            dispatch(showLoginMessage({title: 'Zaloguj się do swojego konta aby móc wypożyczać książki!'}))
        }
    }
    const handleAddToCart = () => {
        const item = {
            authors: book.authors,
            formId: book.formId,
            formName: book.formName,
            id: book.id,
            imageURL: book.images[0].imageURL,
            price: book.price,
            score: book.score,
            title: book.bookTitle,
        }
        dispatch(addToCart(item))
        dispatch(showPopup(item))
    }
    const handleAddToWishlist = () => {
        if(isAuth){
            const data = {
                id: book.id,
                bool: true,
            }
            // dispatch(editWishlist(data))
            // dispatch(showMessage({title: "Lista życzeń została zmieniona!"}))
            // setBook(prevBook => ({...prevBook,isWishlisted: !prevBook.isWishlisted}))
        }else{
            dispatch(showLoginMessage({title: "Zaloguj się aby dodawać produkty do listy życzeń!"}))
        }
    }
    useEffect(() => {
        scrollTop()
    },[])
    useEffect(() => {
        if(productID){
            getBook()
            getReviews()
        }
    },[productID])
    useEffect(() => {
        if(book.bookId){
            getBooks()
        }
    },[book])
  return (
    <div className='default-page-wrapper'>
    {Object.keys(book).length > 0 &&
      <div className='flex flex-col relative w-full'>
        <img src={book.images && book.images.length > 0 ? book.images[0].imageURL : ''} className='absolute h-[40rem] lg:h-[30rem] w-full z-10 object-cover blur-sm' />
        <div className='w-full z-20 pt-10 lg:pt-20 px-5 lg:px-20 2xl:px-48'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 lg:gap-10'>
                <div className='h-auto w-full flex items-center justify-end'>
                    <img src={book.images && book.images.length > 0 ? book.images[0].imageURL : ''} className='h-full w-full object-cover rounded-md shadow-book' />
                </div>
                <div className='flex flex-col items-start py-5 px-5 lg:py-10 lg:px-10 bg-white/50 shadow-md dark:bg-midnight-900/70 lg:backdrop-blur-md rounded-md'>
                    <h1 className='text-2xl lg:text-4xl 2xl:text-5xl font-bold my-1'>{book.bookTitle}</h1>
                    <h2 className='text-xl lg:text-2xl 2xl:text-3xl my-1 font-semibold'>{book.authors && book.authors.map((item, index) => {return (<span key={index} className='mr-1'>{item.name} {item.surname}</span>)})}</h2>
                    <h3 className='font-semibold lg:text-lg 2xl:text-xl my-1'>{book.formName === "Book" ? "Książka" : "Ebook"}</h3>
                    <Stars score={book.score}/>
                    {books.length > 0 &&
                    <div className='flex flex-wrap my-4'>
                        {books.map((item,index) => {
                            return (
                                <Link key={index} to={`/produkt/${item.id}`} className={`flex flex-col ${item.id === book.id ? 'border-2 border-purple-400' : ''} bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2 my-1`}>
                                    <h1 className='text-base font-medium'>{item.formName === 'Book' ? `Książka (${item.editionName})` : `Ebook (${item.fileFormatName})`}</h1>
                                    <h2 className='font-bold mt-1'>{item.price && item.price.toFixed(2)}zł</h2>
                                </Link>
                            )
                        })}                  
                    </div>
                    }
                    <div className='mt-auto w-full flex flex-col items-start'>
                    <div className='flex my-2'>
                        <h3 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold'>{book.price && book.price.toFixed(2)}zł</h3>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row justify-between my-2 w-full'>
                        <div className='flex flex-col lg:flex-row'>
                            <button onClick={handleAddToCart} className='rounded-purple-button my-2 lg:my-0'>Dodaj do koszyka</button>
                            {book.formId === 2 &&
                            <button onClick={handleRentButton} className='rounded-purple-button my-2 lg:my-0 lg:mx-2'>Wypożycz ebooka</button>
                            }
                        </div>
                        <div className='flex justify-end my-2 lg:my-0'>
                            <button onClick={handleAddToWishlist} className='rounded-3xl bg-purple-400 h-10 w-10 flex items-center justify-center mx-1 hover:bg-purple-500'><FaHeart className={`${book.isWishlisted ? "text-purple-800" : 'text-white dark:text-midnight-800'}`}/></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:grid grid-cols-[1fr_2fr] gap-5 lg:gap-10 my-5 lg:my-10'>
                <div className='flex flex-col'>
                <h1 className='text-3xl font-medium my-5'>Informacje</h1>
                <div className='grid grid-cols-2 gap-5 h-max my-2'>
                    <div className=''>
                        <h3 className='font-medium'>Autor</h3>
                        <h4 className='font-light'>{book.authors.map((item,index) => {return(<span key={index} className='mr-1'>{item.name} {item.surname}</span>)})}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Wydawnictwo</h3>
                        <h4 className='font-light'>{book.publisherName}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Język produktu</h3>
                        <h4 className='font-light'>{book.language}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Tłumaczenie</h3>
                        <h4 className='font-light'>{book.translatorName}</h4>
                    </div>
                    <div className=''>
                        {book.formId === 1 ?
                        <>
                        <h3 className='font-medium'>Edycja okładki</h3>
                        <h4 className='font-light'>{book.editionName}</h4>
                        </>
                        :
                        <>
                        <h3 className='font-medium'>Format pliku</h3>
                        <h4 className='font-light'>{book.fileFormatName}</h4>
                        </>
                        }
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Język oryginalny</h3>
                        <h4 className='font-light'>{book.originalLanguage}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Data wydania</h3>
                        <h4 className='font-light'>{book.releaseDate && convertDateDisplay(book.releaseDate)}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>ISBN</h3>
                        <h4 className='font-light'>{book.isbn}</h4>
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Liczba stron</h3>
                        <h4 className='font-light'>{book.pages}</h4>
                    </div>
                    <div className='col-span-2'>
                    <h3 className='font-medium'>Kategorie</h3>
                    <div className='my-2 flex'>
                        {book.categories.map((item,index) => {
                            return (
                                <div key={index} className='mr-2 text-sm bg-purple-400 text-white rounded-full px-4 py-2'><h4>{item.name}</h4></div>
                            )
                        })}          
                    </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-medium my-5'>Opis</h1>
                    <p className='my-2 dark:text-gray-200'>{book.description}</p>
                </div>
                {book.images.length > 1 &&
                <div className='col-span-2 flex flex-col'>
                    <h1 className='text-3xl font-medium'>Zdjęcia</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-5 grid-rows-2 my-2 gap-5 lg:gap-10'>
                        {book.images && book.images.map((image, index) => (
                            <img key={index} src={image.imageURL} className={`h-auto w-full object-contain rounded-md ${index === 0 ? 'col-span-2 row-span-2' : ''}`} />
                        ))}                  
                    </div>
                </div>
                }
                <div className='col-span-2 flex flex-col'>
                <h1 className='text-3xl font-medium'>Recenzje</h1>
                <ReviewSummary score={book.score} scoreValues={book.scoreValues}/>
                <h1 className='text-xl font-medium my-2'>Ostatnie recenzje</h1>
                {reviews.length > 0 ?
                <>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-2'>
                    {reviews && reviews.map((item,index) => {
                        return (
                            <Review key={index} item={item} />
                        )
                    })}
                </div>
                <Link to={`/recenzje/${book.id}`} className='purple-button mt-4 w-max self-center'>Wyświetl wszystkie recenzje</Link>
                </>
                :
                <div className='flex flex-col justify-center items-center h-full'>
                    <img src='https://iili.io/JT0PtrN.png' className='w-1/3 lg:w-1/6 h-auto object-contain' />
                    <h1 className='text-xl lg:text-2xl font-semibold my-2'>Brak recenzji</h1>
                    <p className='lg:text-lg font-light text-center'>Nie dodano jeszcze żadnych recenzji dla wybranej książki</p>
                </div>
                }
                </div>
                <div className='col-span-2 flex flex-col'>
                {book.categories &&
                <BooksCarousel title="Podobne produkty" filter={`numberOfElements=10&categoryIds=${book.categories[0].id}`}/>}
                </div>
            </div>
        </div>
      </div>
    }
    </div>
  )
}

export default Product
