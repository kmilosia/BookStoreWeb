import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Book, Books, ElectronicBook, ElectronicBooks, Home, Navbar,Footer, Rental, RentalElectronicBook, Store, RentalBooks, Contact, News, AllNews} from './import'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='sklep' element={<Store />}/>
        <Route path='kontakt' element={<Contact />}/>
        <Route path='wiadomosci' element={<News />}/>
        <Route path='wszystkie-wiadomosci' element={<AllNews />}/>
        <Route path='wypozyczalnia' element={<Rental />}/>
        <Route path='ksiazki' element={<Books />}/>
        <Route path='ksiazka' element={<Book />}/>
        <Route path='e-booki' element={<ElectronicBooks />}/>
        <Route path='e-book' element={<ElectronicBook />}/>
        <Route path='wypozycz-e-book' element={<RentalElectronicBook />}/>
        <Route path='wypozycz-e-booki' element={<RentalBooks />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
