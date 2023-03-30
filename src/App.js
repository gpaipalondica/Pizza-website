import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { ShopContextProvider } from './context/shop-context';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' Component={Menu}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/cart' Component={Cart}/>
        </Routes>

        <Footer/>
      </Router>

      </ShopContextProvider>



    </div>
  );
}

export default App;
