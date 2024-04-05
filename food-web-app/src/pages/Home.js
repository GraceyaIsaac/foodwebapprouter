import React from "react"; 
import { Link } from "react-router-dom";
import "../styles/Home.css"
import MainImage from '../assets/pizza.jpeg'
const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${MainImage})`}}>
      <div className="headerContainer" >
        <h1> Feastful FrenZy</h1>
        <p>A pizza paradise offering a diverse menu of handcrafted pies for every taste bud.</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;