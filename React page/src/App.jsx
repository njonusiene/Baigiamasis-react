import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reviews from './pages/Reviews';
import Bouquets from './pages/Bouquets';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AddReview from './pages/AddReview';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import './styles/style.scss';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    //Užkrovimas "mode" iš local storage
    const savedTheme = localStorage.getItem('isDarkMode')
    return savedTheme !== null ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    // Update CSS styles pagal mode
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode)

    // Išsaugojimas local storage
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="toggle" onClick={toggleDarkMode}><MdDarkMode />/<CiLight /></button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bouquets" element={<Bouquets />} />
          <Route path="/reviews/:productId" element={<Reviews />} />
          <Route path="/reviews/:productId/new-review" element={<AddReview />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
