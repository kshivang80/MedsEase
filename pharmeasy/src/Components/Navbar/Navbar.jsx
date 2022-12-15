import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/Plus"}>Plus</Link>
      <Link to={"/Offer"}>Offers</Link>
    </div>
  )
}

export default Navbar