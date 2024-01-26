import React from "react";
import { Link } from "react-router-dom";

const Filter = ({ onCategoryChange, onPriceChange, categoryFilter, priceFilter }) => {
  return (
    <div className="filter-options">
      <label>
        Filter by color: 
        <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="all">all</option>
            <option value="mix">🌈Mix</option>
            <option value="white">⚪White</option>
            <option value="Purple">🟣Purple</option>
            <option value="yellow">🟡Yellow</option>
            <option value="red">🔴Red</option>
            <option value="pink">🌸Pink</option>
        </select>
      </label>
      <label>
        Sort by price: 
        <select value={priceFilter} onChange={(e) => onPriceChange(e.target.value)}>
          <option value="all">None</option>
          <option value="lowest"> ↓ Low - High </option>
          <option value="highest"> ↑ High - Low</option>
        </select>
      </label>
      {/* <Link to="/">+ Create New</Link> */}
    </div>
  );
};

export default Filter;
