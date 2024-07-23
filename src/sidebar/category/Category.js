import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" label></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" label></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" label></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" label></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" label></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
