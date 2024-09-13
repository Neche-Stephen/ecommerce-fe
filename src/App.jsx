import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import LandingPage from './routes/landingPage/LandingPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path="/home" element={<LandingPage />} />
        </Route>
      </Routes>

    </>
   
  )
}

export default App
