import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <Link to="/">Blog App</Link>
      </div>
      <nav className="navbar__links">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  )
}

export default Navbar
