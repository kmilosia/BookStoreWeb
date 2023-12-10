import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Home, Search,PageNotFound, Rental, Store, Contact, News, AllNews, NewsItem, Login, Register, Account, AccountPersonalData, AccountOrders,
  Library, AccountRentals, Cart, Wishlist,Checkout, Access, RecoverPassword,
  Documents, Terms, Privacy, Cookies, About, Categories, Category, RecoverPasswordEmail, RecoverPasswordResetLink, RecoverPasswordNewPassword, RecoverPasswordConfirmation, RegisterRequiredData, RegisterConfirmation, Product, RegisterConfirmEmail, LibraryBookPanel, LibraryBookElement, AccountAddress, BooksList, EbooksList, Discounts, UserWishlist, Payment, OrderConfirmation, CheckoutReview, Reviews} from './import'
import MainLayout from './MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkUserLogin } from './store/userSlice';
import CartPopup from './modals/CartPopup';
import Message from './modals/Message';
import LoginPopup from './modals/LoginPopup';
function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.isAuth)
  useEffect(() => {
    dispatch(checkUserLogin()) 
  },[isAuth])
  return (
    <>
    <Message />
    <Router>
    <CartPopup />
    <LoginPopup />
      <Routes>
        <Route path='/' element={<Navigate to={'/'}/>} />
        <Route path='/dostep' element={isAuth ? <Navigate to="/" /> : <Access />}>
          <Route index element={<Navigate to='logowanie' />} />
          <Route path='logowanie' element={<Login />} />
          <Route path='rejestracja' element={<Register />}>
            <Route index element={<RegisterRequiredData />} />
            <Route path='potwierdz-email' element={<RegisterConfirmEmail />} />
            <Route path='potwierdzenie' element={<RegisterConfirmation />} />
          </Route>
          <Route path='odzyskaj-konto' element={<RecoverPassword />}>
            <Route index element={<RecoverPasswordEmail />} />
            <Route path='email' element={<RecoverPasswordResetLink />} />
            <Route path='resetuj-haslo' element={<RecoverPasswordNewPassword />} />
            <Route path='potwierdzenie' element={<RecoverPasswordConfirmation />} />
          </Route>
        </Route>
        <Route path='/' element={<MainLayout />}>
          <Route path='*' element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path='sklep' element={<Store />} />
          <Route path='wypozyczalnia' element={<Rental />}/>
          <Route path='szukaj' element={<Search />} />
          <Route path='koszyk' element={<Cart />} />
          <Route path='kategorie' element={<Categories />} />
          <Route path='kategorie/:title' element={<Category />} />
          <Route path='zamowienie' element={<Checkout />}/>
          <Route path='oplac-zamowienie' element={<Payment />}/>
          <Route path='przeglad-zamowienie' element={<CheckoutReview />}/>
          <Route path='potwierdzenie-zamowienia' element={<OrderConfirmation />}/>
          <Route path='ulubione' element={<Wishlist />} />
          <Route path='ulubione/:guid' element={<UserWishlist />} />
          <Route path='kontakt' element={<Contact />} />
          <Route path='o-nas' element={<About />} />
          <Route path='wiadomosci' element={<News />} />
          <Route path='wiadomosc/:id' element={<NewsItem />} />
          <Route path='wszystkie-wiadomosci' element={<AllNews />}/>
          <Route path='ebooki' element={<EbooksList />}/>
          <Route path='promocje' element={<Discounts />}/>
          <Route path='ksiazki' element={<BooksList />}/>
          <Route path='produkt/:id' element={<Product />}/>
          <Route path='recenzje/:id' element={<Reviews />}/>
          <Route path='konto' element={!isAuth ? <Navigate to="/dostep/logowanie" /> : <Account />}>
            <Route index element={<AccountPersonalData />} />
            <Route path='adres' element={<AccountAddress />} />
            <Route path='zamowienia' element={<AccountOrders />} />
            <Route path='wypozyczenia' element={<AccountRentals />} />
          </Route>
          <Route path='biblioteka' element={<Library />}>
            <Route index element={<LibraryBookPanel />}/>
            <Route path=':id' element={<LibraryBookElement />}/>
          </Route>
          <Route path='dokumenty' element={<Documents />}>
            <Route index element={<Navigate to='regulamin' />} />
            <Route path='polityka-prywatnosci' element={<Privacy />} />
            <Route path='cookies' element={<Cookies />} />
            <Route path='regulamin' element={<Terms />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
