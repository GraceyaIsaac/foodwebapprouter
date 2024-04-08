import React,{useState} from "react"; 
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder'
import Logo from '../assets/pizzaLogo.png';

const Navbar = () => {
    const[openLinks,setOpenLinks]=useState(false)
//function
  const toggleNavbar=()=>{
    setOpenLinks(!openLinks)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open":"close"}>
        <img src={Logo} alt="Pizza Logo" />
        <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> 
        </div>
      </div>
      <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> 
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
             
      </div>
      
    </div>
  );
}

export default Navbar;
