import React, { useState } from 'react';
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";
import { GiSpotedFlower } from "react-icons/gi";
import { MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaPinterestSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email and do not leave a blank space. :)')
      return;
    }
    const newData = {
      data: {
        email: email,
      },
    }
    try {
      const response = await fetch(
        'https://api.apispreadsheets.com/data/k1oV66P5rpkqtqmL/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        }
      ) 
    if (response.status === 201) {
        alert('Thank You! I will get in touch as soon as posible 🌼')
        setEmail('');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  }
  
  return (
    <>
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
      >
      <Navbar/>
      <div className="contactpage">
        <div className="photo">
            <img src="https://images.unsplash.com/photo-1516827096346-bfb65d850f70?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flower" />
        </div>
        <div className="split">
          <article>
            <br />
              We are proud to present our wonderful goods. Here you can find many wonderful examples because our collection is one of the biggest among flower stores. We know how to satisfy our clients because we have one similar passion – flowers.
              <br /><br />
              - <GiSpotedFlower/> Kindly Our team <GiSpotedFlower /> -
              <br /> <br />
              <hr/>
          </article>
          <div className='contacts'>
            <ul>
              <li><b>Call us:</b></li>
              <li><MdOutlineLocalPhone /> 370 666 66666</li>
              <br />
              <li><b>Write us:</b></li>
              <li><MdEmail /> flower@store.com</li>
            </ul>
            <br />
            <h2>If you want to get Newsletter:</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="submit" value="Send" />
            </form>
            <div className="social">
                <p>Folow US:</p>
                <br />
                <Link to="https://www.facebook.com/"><FaFacebook /></Link>
                <Link to="https://www.instagram.com/"><FaInstagramSquare /></Link>
                <Link to="https://www.pinterest.com/"><FaPinterestSquare /></Link>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Contact
