import React from 'react'
import { FaFacebook, FaInstagramSquare, FaPinterestSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer>  
          <div className="social-footer">
                <p>Folow US:</p>
                <br />
                <div>
                <Link to="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
                <Link to="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></Link>
                <Link to="https://www.pinterest.com/search/pins/?q=flower%20store&rs=typed" target="_blank"><FaPinterestSquare /></Link>
                </div>
            </div>
          </footer>
  )
}

export default HomeFooter
