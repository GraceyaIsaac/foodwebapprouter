import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'
            style={{backgroundImage:`url(${MultiplePizza})`}}> 
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Feastful FrenZy is the ultimate destination for pizza lovers, offering a delightful experience filled with flavor and excitement. Dive into our extensive menu featuring a tantalizing array of handcrafted pizzas, each bursting with fresh ingredients and bold flavors. Whether you're a fan of classic Margherita, indulgent Meat Lovers, or adventurous Veggie Supreme, we've got something to satisfy every craving. Join the frenzy and embark on a culinary journey like no other with Feastful FrenZy - where every slice is a celebration of taste and tradition.</p>
      </div>
    </div>
  )
}

export default About
