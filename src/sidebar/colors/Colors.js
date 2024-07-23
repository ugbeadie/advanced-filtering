import React from "react";
import "./Colors.css";

const Color = () => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Color</h2>

      <label className="sidebar-label-container color-title">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>Black
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>Blue
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>Red
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>Green
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark" label></span>White
      </label>
    </div>
  );
};

export default Color;
