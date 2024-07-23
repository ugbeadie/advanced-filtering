import React from "react";
// import "./index.css";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";

const App = () => {
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
