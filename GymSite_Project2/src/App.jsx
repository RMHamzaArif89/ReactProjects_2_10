import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './Components/nav'
import Home from './Components/Home'
import About from './Components/about'




function App() {
  

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
         <Route index element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/form" element={<Form />} /> */}
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
