import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="app">
      <div className="logo">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
