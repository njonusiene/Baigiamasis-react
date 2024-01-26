import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import { PiFlowerLotusThin } from "react-icons/pi";
import { FaFacebook, FaInstagramSquare, FaPinterestSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header() {
  const [scroll, setScroll] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const scrollFooter = () => {
    if (scroll >= footerHeight) {
      document.querySelector('footer').style.bottom = '0px';
    } else {
      document.querySelector('footer').style.bottom = `-${footerHeight}px`;
    }
  };

  useEffect(() => {
    console.log("useEffect is called");
    const windowHeight = window.innerHeight;
    const heightDocument = windowHeight + document.querySelector('.content').offsetHeight + footerHeight - 20;
  
    console.log("heightDocument:", heightDocument); // Pridėta console.log
  
    document.getElementById('scroll-animate').style.height = `${heightDocument}px`;
  
    document.querySelector('header').style.height = `${windowHeight}px`;
    document.querySelector('header').style.lineHeight = `${windowHeight}px`;
  
    document.querySelector('.wrapper-parallax').style.marginTop = `${windowHeight}px`;
  
    scrollFooter();
  
    window.onscroll = () => {
      const newScroll = window.scrollY;
  
      console.log("New Scroll Value:", newScroll); // Pridėta console.log
  
      document.getElementById('scroll-animate-main').style.top = `-${newScroll}px`;
  
      document.querySelector('header').style.backgroundPositionY = `${50 - (newScroll * 100 / heightDocument)}%`;
  
      setScroll(newScroll);
    };
  }, [footerHeight, scroll]);
  

  useEffect(() => {
    setFooterHeight(document.querySelector('footer').offsetHeight);
  }, []);

  return (
    <>
    
    <Navbar/>
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <header>
            <h1>THE BIGGEST SELECTION OF FRESH FLOWERS!</h1>
          </header>

          <section className="content">
            <div className="cards-container">
              <article className="card">
                <img src="https://plus.unsplash.com/premium_photo-1661762164216-adb87dea8399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="garden"  />
                <h2>Quality</h2>
                <br />
                <p>Our bouquets are always made by the best quality fresh flowers, so that it would delight the recipient for longer.</p>
                <span><PiFlowerLotusThin /></span>
              </article>

              <article className="card">
                <span><PiFlowerLotusThin /></span>
                <h2>Fresh</h2>
                <br />
                <p>Every Interflora bouquet is hand-made in a local flower shop and delivered by the florist.</p>
                <br />
                <img src="https://plus.unsplash.com/premium_photo-1671974490018-813bcb0d6635?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
              </article>

              <article className="card">
              <img src="https://images.unsplash.com/photo-1587743368367-67ec3e7377f2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                <h2>Smile</h2>
                <br />
                <p>Interflora Lithuania has been offering high quality flower and gift delivery service more than 30 years. We lave to see Your smile.</p>
                <span><PiFlowerLotusThin /></span>
              </article>
            </div>
          </section>
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
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
