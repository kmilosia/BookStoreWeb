import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Book, Books, ElectronicBook, ElectronicBooks, Home, Search,PageNotFound, Rental, RentalElectronicBook, Store, RentalBooks, Contact, News, AllNews, NewsItem, Login, Register, Account, AccountPersonalData, AccountOrders,
   Library, AccountRentals, Cart, Wishlist,Checkout, CheckoutDelivery, CheckoutPayment, CheckoutConfirmation, CheckoutLogin, RegisterFirstStep, RegisterSecondStep, RegisterLastStep, Access, RecoverPassword, RecoverPasswordFirstStep, RecoverPasswordSecondStep, RecoverPasswordThirdStep,
    Documents, Terms, Privacy, Cookies, About, Categories, Category} from './import'
import MainLayout from './MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>} />

        <Route path='/dostep' element={<Access />}>
          <Route index element={<Navigate to='logowanie' />} />
          <Route path='logowanie' element={<Login />} />

          <Route path='rejestracja' element={<Register />}>
            <Route index element={<RegisterFirstStep />} />
            <Route path='dane-osobowe' element={<RegisterSecondStep />} />
            <Route path='potwierdzenie' element={<RegisterLastStep />} />
          </Route>

          <Route path='odzyskiwanie-hasla' element={<RecoverPassword />}>
            <Route index element={<RecoverPasswordFirstStep />} />
            <Route path='resetuj-haslo' element={<RecoverPasswordSecondStep />} />
            <Route path='potwierdzenie' element={<RecoverPasswordThirdStep />} />
          </Route>
        </Route>

        <Route element={<MainLayout />}>
          <Route path='*' element={<PageNotFound />} />
          <Route path='home' element={<Home />} />
          <Route path='sklep' element={<Store />} />
          <Route path='szukaj' element={<Search />} />

          <Route path='kategorie' element={<Categories />} />
          <Route path='kategorie/:title' element={<Category />} />

          <Route path='zamowienie' element={<Checkout />}>
            <Route index element={<Navigate to='koszyk' />} />
            <Route path='koszyk' element={<Cart />} />
            <Route path='dostawa' element={<CheckoutDelivery />} />
            <Route path='platnosc' element={<CheckoutPayment />} />
            <Route path='potwierdzenie' element={<CheckoutConfirmation />} />
            <Route path='logowanie' element={<CheckoutLogin />} />
          </Route>

          <Route path='ulubione' element={<Wishlist />} />
          <Route path='kontakt' element={<Contact />} />
          <Route path='o-nas' element={<About />} />
          <Route path='wiadomosci' element={<News />} />
          <Route path='wiadomosc' element={<NewsItem />} />
          <Route path='wszystkie-wiadomosci' element={<AllNews />}/>
          <Route path='wypozyczalnia' element={<Rental />}/>
          <Route path='ksiazki' element={<Books />}/>
          <Route path='ksiazka' element={<Book />}/>
          <Route path='e-booki' element={<ElectronicBooks />}/>
          <Route path='e-book' element={<ElectronicBook />}/>
          <Route path='wypozycz-e-book' element={<RentalElectronicBook />}/>
          <Route path='wypozycz-e-booki' element={<RentalBooks />}/>
          <Route path='biblioteka' element={<Library />}/>

          <Route path='konto' element={<Account />}>
            <Route index element={<AccountPersonalData />} />
            <Route path='dane-osobowe' element={<AccountPersonalData />} />
            <Route path='zamowienia' element={<AccountOrders />} />
            <Route path='wypozyczenia' element={<AccountRentals />} />
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
  );
}

export default App;
