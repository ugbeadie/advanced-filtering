import { useState } from "react";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
