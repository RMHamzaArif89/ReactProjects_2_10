import React from 'react'
import './css/nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className="logo">
            <img src="/images/logo.jpg" alt="" />
        </div>
        <div className="list">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/form'>Form</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
