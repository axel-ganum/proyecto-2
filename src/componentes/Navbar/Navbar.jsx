import React, { useContext } from 'react';
import { dataContext } from '../DataContext';

import"./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  const { cart } = useContext(dataContext);
  const cartQuantity = cart.length;
  return (
    <div className="nav-container">
        <nav className="navbar">
            <h1 className="navbar-logo">Shop</h1>
            <Link className="seeCarrito" to = {"cart"}>🛒{cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}</Link>
            </nav>
            </div>
  )
}

export default Navbar