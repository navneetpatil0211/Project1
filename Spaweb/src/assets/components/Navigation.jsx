import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className="container"> 
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
