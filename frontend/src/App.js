import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import ProductPage from './Components/ProductPage/ProductPage';
import Fetchitem from './Components/FetchItem/Fetchitem';
import LargeProductPage from './Components/ProductPage/LargeProductPage';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Fetchitem />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:Id' element={<LargeProductPage/>} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  )
}

export default App;
