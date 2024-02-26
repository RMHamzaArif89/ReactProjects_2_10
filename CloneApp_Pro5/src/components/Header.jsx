import React from 'react'
import logo from './images/logo.jpg'
import './css/header.css'

function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="" className="logo"/>
        <div className="heading">RM Keep</div>
    </div>
  )
}

export default Header
