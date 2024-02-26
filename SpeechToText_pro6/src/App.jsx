import { useState } from 'react'
import './App.css'
import Dictaphone from './components/speech'
import Header from './components/Header'

function App() {
 

  return (
    <>
    <Header/>
     <div className="container">
     <Dictaphone/>
     </div>
    </>
  )
}

export default App
