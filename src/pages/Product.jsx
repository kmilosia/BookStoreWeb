import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Stars from '../components/elements/Stars';
import PageLoader from '../components/elements/PageLoader';
import ReviewSummary from '../components/page-elements/ReviewSummary';
import Review from '../components/page-elements/Review';
import { convertDateDisplay } from '../utils/functions/convertDate';
import BooksCarousel from '../components/carousel/books-carousel/BooksCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { showPopup } from '../store/cartPopupSlice';
import { showLoginMessage } from '../store/loginPopupSlice';
import { showMessage } from '../store/messageSlice';
import { addRentBook } from '../store/rentSlice';
import { getBookDetails, getBooksByBookId } from '../utils/api/bookItemsAPI';
import { getReviewsAmount } from '../utils/api/reviewsAPI';
import { addToWishlist, deleteWishlistItem } from '../utils/api/wishlistAPI';
import ProductImages from '../components/page-elements/ProductImages';

function Product() {
    const { isAuth } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const {id} = useParams()
    const productID = Number(id)
    const [book, setBook] = useState({})
    const [books, setBooks] = useState([])
    const [reviews, setReviews] = useState([])
    const [bookLoading, setBookLoading] = useState(true)
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
            discountedBruttoPrice: book.discountedBruttoPrice,
            score: book.score,
            title: book.bookTitle,
            isWishlisted: book.isWishlisted,
        }
        dispatch(addToCart(item))
        dispatch(showPopup(item))
    }
    const handleAddToWishlist = () => {
        if(isAuth){
            if(book.isWishlisted){
                deleteWishlistItem(book.id)
                setBook(prevBook => ({...prevBook,isWishlisted: !prevBook.isWishlisted}))
                dispatch(showMessage({title: "Produkt usunięto z listy życzeń!"}))
            }else{
            addToWishlist(book.id)
            dispatch(showMessage({title: "Produkt dodano do listy życzeń!"}))
            setBook(prevBook => ({...prevBook,isWishlisted: !prevBook.isWishlisted}))
            }
        }else{
            dispatch(showLoginMessage({title: "Zaloguj się aby dodawać produkty do listy życzeń!"}))
        }
    }
    useEffect(() => {
        if(productID){
            getBookDetails(productID,setBook,setBookLoading)
            getReviewsAmount(productID, setReviews, 4)
        }
    },[productID])
    useEffect(() => {
        if(book.bookId){
            getBooksByBookId(book.bookId, setBooks)
        }
    },[book])
  return (
    <div className='default-page-wrapper'>
    {bookLoading ? <PageLoader /> :
    Object.keys(book).length > 0 &&
      <div className='flex flex-col relative w-full'>
        <img src={book.images?.length > 0 ? book.images[0].imageURL : ''} className='absolute h-[40rem] lg:h-[30rem] w-full z-10 object-cover blur-sm' />
        <div className='w-full z-20 pt-10 lg:pt-20 px-5 lg:px-20 2xl:px-48'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 lg:gap-10'>
                <div className='h-auto w-full flex items-center justify-end'>
                    <img src={book.images?.length > 0 ? book.images[0].imageURL : ''} className='h-full w-full object-cover rounded-md shadow-book' />
                </div>
                <div className='flex flex-col items-start py-5 px-5 lg:py-10 lg:px-10 bg-white/50 shadow-md dark:bg-midnight-900/70 lg:backdrop-blur-md rounded-md'>
                    <div className='grid grid-cols-[auto_max-content] gap-2 w-full'>
                        <h1 className='text-2xl lg:text-4xl 2xl:text-5xl font-bold my-1'>{book.bookTitle}</h1>
                        <div className='flex mt-1'>
                            <button onClick={handleAddToWishlist} className='rounded-3xl bg-midnight-900 dark:bg-white h-10 w-10 flex items-center justify-center mx-1'><FaHeart className={`${book.isWishlisted ? "text-purple-500" : 'text-white dark:text-midnight-800'}`}/></button>
                        </div>
                    </div>
                    <h2 className='text-xl lg:text-2xl 2xl:text-3xl my-1 font-semibold'>{book.authors?.map((item, index) => {return (<span key={index} className='mr-1'>{item.name} {item.surname}</span>)})}</h2>
                    <h3 className='font-semibold lg:text-lg 2xl:text-xl my-1'>{book.formName === "Book" ? "Książka" : "Ebook"}</h3>
                    <Stars score={book.score}/>
                    {books.length > 0 &&
                    <div className='flex flex-wrap my-4'>
                        {books.map((item,index) => {
                            return (
                                <Link key={index} to={`/produkt/${item.id}`} className={`flex flex-col ${item.id === book.id ? 'border-2 border-purple-400' : ''} bg-white/50 dark:bg-midnight-950/50 shadow-md rounded-md px-5 py-3 mr-2 my-1`}>
                                    <p className='text-base font-medium'>{item.formName === 'Book' ? `${item.editionName}` : `Ebook ${item.fileFormatName}`}</p>
                                    <p className='font-bold mt-1'>{item.discountedBruttoPrice !== 0 ? item.discountedBruttoPrice.toFixed(2) : item.price.toFixed(2)}zł</p>
                                </Link>
                            )
                        })}                  
                    </div>
                    }
                    {book.availabilityId === 1 ?
                    <div className='mt-auto w-full flex flex-col items-start'>
                        <div className='flex flex-row align-bottom justify-center my-2'>
                            {book.discountedBruttoPrice !== 0 &&
                            <p className='text-3xl lg:text-4xl 2xl:text-5xl font-bold text-purple-400 mr-2'>{book.discountedBruttoPrice?.toFixed(2)}zł</p>}
                            <p className={`${book.discountedBruttoPrice !== 0 ? 'font-light line-through text-xl' : 'text-3xl lg:text-4xl 2xl:text-5xl font-bold'}`}>{book.price?.toFixed(2)}zł</p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between my-2 w-full'>
                            <div className='flex flex-col lg:flex-row'>
                                <button onClick={handleAddToCart} className='rounded-purple-button my-2 lg:my-0'>Dodaj do koszyka</button>
                                {book.formId === 2 &&
                                <button onClick={handleRentButton} className='rounded-purple-button my-2 lg:my-0 lg:mx-2'>Wypożycz ebooka</button>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center mt-auto'>
                        <p className='text-lg text-gray-500 dark:text-gray-400'>Produkt tymczasowo niedostępny!</p> 
                    </div>}
                </div>
            </div>
            <div className='flex flex-col lg:grid grid-cols-[1fr_2fr] gap-5 lg:gap-10 my-5 lg:my-10'>
                <div className='flex flex-col'>
                <h1 className='text-3xl font-medium my-5'>Informacje</h1>
                <div className='grid grid-cols-2 gap-5 h-max my-2'>
                    <div className=''>
                        <p className='font-medium'>Wydawnictwo</p>
                        <p className='font-light'>{book.publisherName}</p>
                    </div>
                    <div className=''>
                        <p className='font-medium'>Język produktu</p>
                        <p className='font-light'>{book.language}</p>
                    </div>
                    <div className=''>
                        <p className='font-medium'>Tłumaczenie</p>
                        <p className='font-light'>{book.translatorName}</p>
                    </div>
                    <div className=''>
                        {book.formId === 1 ?
                        <>
                        <p className='font-medium'>Edycja okładki</p>
                        <p className='font-light'>{book.editionName}</p>
                        </>
                        :
                        <>
                        <p className='font-medium'>Format pliku</p>
                        <p className='font-light'>{book.fileFormatName}</p>
                        </>
                        }
                    </div>
                    <div className=''>
                        <p className='font-medium'>Język oryginalny</p>
                        <p className='font-light'>{book.originalLanguage}</p>
                    </div>
                    <div className=''>
                        <p className='font-medium'>Data wydania</p>
                        <p className='font-light'>{book.releaseDate && convertDateDisplay(book.releaseDate)}</p>
                    </div>
                    <div className=''>
                        <p className='font-medium'>ISBN</p>
                        <p className='font-light'>{book.isbn}</p>
                    </div>
                    <div className=''>
                        <p className='font-medium'>Liczba stron</p>
                        <p className='font-light'>{book.pages}</p>
                    </div>
                    <div className='col-span-2'>
                        <p className='font-medium'>Autor</p>
                        <p className='font-light'>{book.authors?.map((item,index) => {return(<span key={index} className='mr-1'>{item.name} {item.surname}</span>)})}</p>
                    </div>
                    <div className='col-span-2'>
                        <p className='font-medium'>Kategorie</p>
                        <div className='my-2 flex'>
                            {book.categories?.map((item,index) => {
                                return (
                                    <div key={index} className='mr-2 text-sm bg-purple-400 text-white rounded-full px-4 py-2'><p>{item.name}</p></div>
                                )
                            })}          
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-3xl font-medium my-5'>Opis</p>
                    <p className='my-2 dark:text-gray-200'>{book.description}</p>
                </div>
                {book.images.length > 1 &&
                <div className='col-span-2 flex flex-col'>
                    <p className='text-3xl font-medium'>Zdjęcia</p>
                    <ProductImages item={book.images} />
                </div>
                }
                <div className='col-span-2 flex flex-col'>
                <p className='text-3xl font-medium'>Recenzje</p>
                <ReviewSummary score={book.score} scoreValues={book.scoreValues}/>
                <p className='text-xl font-medium my-2'>Ostatnie recenzje</p>
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
                    <p className='text-xl lg:text-2xl font-semibold my-2'>Brak recenzji</p>
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
