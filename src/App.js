import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Book, Books, ElectronicBook, ElectronicBooks, Home, Search,PageNotFound, Rental, RentalElectronicBook, Store, RentalBooks, Contact, News, AllNews, NewsItem, Login, Register, Account, AccountPersonalData, AccountOrders, AccountLibrary, AccountRentals} from './import'
import MainLayout from './MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path='*' element={<PageNotFound />} />
          <Route path='home' element={<Home />} />
          <Route path='sklep' element={<Store />} />
          <Route path='szukaj' element={<Search />} />
          <Route path='kontakt' element={<Contact />} />
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
          <Route path='konto' element={<Account />}>
            <Route index element={<AccountPersonalData />} />
            <Route path='dane-osobowe' element={<AccountPersonalData />} />
            <Route path='zamowienia' element={<AccountOrders />} />
            <Route path='biblioteka' element={<AccountLibrary />} />
            <Route path='wypozyczenia' element={<AccountRentals />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
