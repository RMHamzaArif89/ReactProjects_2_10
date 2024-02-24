import React from 'react'
import './css/nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className="logo">
            <img src="/images/logo.jpg" alt="" />
        </div>
        <div className="list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Information</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
