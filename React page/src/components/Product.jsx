import React from "react"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Product = ({ id, title, image, price, description }) => {
  
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
      className="input"
    >
      <img src={image} alt={title} />
      <br />
      <h2>{title}</h2>
      <h4>Price: {price} €</h4>
      <br />
      <p>{description}</p>
      <div className="buttons">
      <Link to={`/reviews/${id}`}>Show Reviews</Link>
      </div>
    </motion.div>
  )
}

export default Product
