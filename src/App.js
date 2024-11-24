import './App.css';
import React, {  useState } from 'react';
import Navbar from './Components/Navbar/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Product from './Components/Product';
import Home from './Components/Home';
import { Footer } from './Components/Footer';
import LoginSignup from './Components/LoginSignup';
import Cart from './Components/Cart';
import Jewerly from './Components/Jewerly';
import WomenC from './Components/WomenC';
import MenC from './Components/MenC';
import Detail from './Components/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {showLogin && <LoginSignup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} cart={cart} />

      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/products" element={<Product cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/product/:productId" element={<Detail cart={cart} setCart={setCart} />} />
        <Route path="/Jewerly" element={<Jewerly />} />
        <Route path="/WomenC" element={<WomenC />} />
        <Route path="/MenC" element={<MenC />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
