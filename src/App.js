import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Navbar} from './import'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
