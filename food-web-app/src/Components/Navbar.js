import React from "react"; 
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import Logo from '../assets/pizzaLogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Pizza Logo" />
      </div>
      <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>      
      </div>
      
    </div>
  );
}

export default Navbar;
