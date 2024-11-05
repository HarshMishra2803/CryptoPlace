import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/coin'
import Footer from './Components/Navbar/footer/footer'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
