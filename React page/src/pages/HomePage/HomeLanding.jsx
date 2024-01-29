import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import HomeFooter from './HomeFooter';
import HomeSection from './HomeSection';

function HomeLanding() {
  const [scroll, setScroll] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const scrollFooter = () => {
    const footer = document.querySelector('footer');
    if (footer && scroll >= footerHeight) {
      footer.style.bottom = '0px';
    } else if (footer) {
      footer.style.bottom = `-${footerHeight}px`;
    }
  };

  useEffect(() => {
    console.log("useEffect is called");
    const windowHeight = window.innerHeight;
    const contentElement = document.querySelector('.content');

    if (contentElement) {
      const heightDocument = windowHeight + contentElement.offsetHeight + footerHeight - 20;
      console.log("heightDocument:", heightDocument);
      document.getElementById('scroll-animate').style.height = `${heightDocument}px`;
    }

    const header = document.querySelector('header');
    if (header) {
      header.style.height = `${windowHeight}px`;
      header.style.lineHeight = `${windowHeight}px`;
    }

    const wrapperParallax = document.querySelector('.wrapper-parallax');
    if (wrapperParallax) {
      wrapperParallax.style.marginTop = `${windowHeight}px`;
    }

    scrollFooter();

    window.onscroll = () => {
      const newScroll = window.scrollY;
      console.log("New Scroll Value:", newScroll);
      document.getElementById('scroll-animate-main').style.top = `-${newScroll}px`;

      if (header) {
        header.style.backgroundPositionY = `${50 - (newScroll * 100 / heightDocument)}%`;
      }

      setScroll(newScroll);
    };
  }, [footerHeight, scroll]);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
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
            <HomeSection/>
            <HomeFooter/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLanding;
