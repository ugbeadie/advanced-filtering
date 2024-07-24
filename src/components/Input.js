import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        handleChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span
        className="checkmark"
        style={{ backgroundColor: color }}
        label
      ></span>
      {title}
    </label>
  );
};

export default Input;
