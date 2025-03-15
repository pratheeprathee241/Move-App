import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Navabar = () => {
  return (
    <div className='navbar'>
         <div>
            <h1>React Books App</h1>
         </div>
         <div>
            
            <Link to="/favories">
            <h3>Your Favories</h3>
            </Link>
         </div>
    </div>
  )
}

export default Navabar