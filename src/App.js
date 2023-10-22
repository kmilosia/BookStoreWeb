import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Book, Books, EBook, EBooks, Home, Navbar, Rental, Store} from './import'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/rental' element={<Rental />}/>
        <Route path='/books' element={<Books />}/>
        <Route path='/book' element={<Book />}/>
        <Route path='/ebooks' element={<EBooks />}/>
        <Route path='/ebook' element={<EBook />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
