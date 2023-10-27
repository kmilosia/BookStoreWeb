import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Book, Books, ElectronicBook, ElectronicBooks, Home, Navbar, Rental, Store} from './import'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sklep' element={<Store />}/>
        <Route path='/wypozyczalnia' element={<Rental />}/>
        <Route path='/ksiazki' element={<Books />}/>
        <Route path='/ksiazka' element={<Book />}/>
        <Route path='/e-booki' element={<ElectronicBooks />}/>
        <Route path='/e-book' element={<ElectronicBook />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
