import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import LandingPage from './routes/landingPage/LandingPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>

    </BrowserRouter>
   
  )
}

export default App
