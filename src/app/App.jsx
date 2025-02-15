import React, { useState } from "react";
import NavBar from "./navBar.jsx";
import ItemListContainer from "./components/itemListContainer.jsx";
import "./App.css";



const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
};

export default App;
