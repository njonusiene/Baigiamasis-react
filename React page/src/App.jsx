import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles/style.scss'
import Reviews from "./pages/Reviews";
import Bouquets from "./pages/Bouquets";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
 
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bouquets" element={<Bouquets/>}/>
            <Route path="/Reviews/:productId" element={<Reviews/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </Router>
    </>
  )
}
