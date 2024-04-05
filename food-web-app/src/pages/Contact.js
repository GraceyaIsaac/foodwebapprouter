import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
    <div className='rightSide'>
      <h1>Contact Us</h1>
      <form id="contact-form" method='POST'>
        <label htmlFor='name'>Full Name</label>
        <input name='name'
        placeholder='Enter Your Full name'
        type='text'/>
        <label htmlFor='email'>Email</label>
        <input name='email'
        placeholder='Enter Your Email'
        type='text'/>
        <label htmlFor='message'>MESSAGE</label>
        <textarea row='6'
        placeholder='Enter Your Full name'
        name='message' required></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
    
    </div>
  )
}

export default Contact
