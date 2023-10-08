import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Navbar} from './import'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
