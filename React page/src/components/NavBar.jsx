import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiSpotedFlower } from "react-icons/gi";



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className='title'><GiSpotedFlower id='icon' /> Flower Store </Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
            
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/Bouquets" >Bouquets</NavLink> </li>
            <li>
                <NavLink to="/Create" >Create</NavLink> </li>
            <li>
                <NavLink to="/Contact" >Contact</NavLink> </li>
        </ul>
    </nav>
  )
}

export default Navbar
