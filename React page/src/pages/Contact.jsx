import React from 'react';
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      <Navbar/>
      
    </motion.div>
    </>
  )
}

export default Contact
