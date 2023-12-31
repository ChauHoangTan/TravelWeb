import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"
import Home from "./page/home/Home"
import Search from "./page/search/SearchPage"
import Product from "./page/tourDetails/TourDetails"
import Booking from "./page/booking/Booking"
import BookingManagement from "./page/bookingManagement/BookingManagement"
import Contact from "./page/contact/Contact"
import AboutUs from "./page/aboutUs/AboutUs"
import Login from "./page/login/Login"
import Signup from "./page/singup/Signup"
import Layout from "./page/layout/Layout"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/tourDetails/:id' element={<Product/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/bookingManagement' element={<BookingManagement/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
