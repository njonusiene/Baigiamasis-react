import React from "react";
import Product from "./Product";
import { motion } from 'framer-motion';

const ProductList = ({ listData, onDelete }) => {
  return (
    <div className="inputs">
      {listData.length > 0 ? (
        listData.map(product => (
          <Product key={product.id} {...product} onDelete={onDelete} />
        ))
      ) : (
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
        >
          Apgailestaujame, tačiau duomenų bazėje nėra produktų.
        </motion.p>
      )}
    </div>
  );
};

export default ProductList;
