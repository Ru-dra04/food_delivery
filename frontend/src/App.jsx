import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
const App = () => {
  const [lg,setlg]=useState(false);
  return (
    <div>
      {lg===true?<LoginPopup setlg={setlg}/>:<div>
    </div>}
    <div className='app'>
      <Navbar lg={lg} setlg={setlg}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path="order" element={<PlaceOrder/>} />
        <Route path="verify" element={<Verify/>} />
        <Route path='myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
    
  )
}

export default App
