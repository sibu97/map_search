import React from "react";
import './App.css';
import { NavBar } from './compnents/Navbar';
import Maps from "./compnents/Map";

function App() {
 
  return (
    <>
      <div style={{ backgroundColor: 'teal', height: "50px", width: "100vw" }}>
        <NavBar  />
      </div>
     <div className="App" style={{
        display: "flex",
        border:"2px solid red",
      flexDirection: "row",
      width: "auto",
      height: "100%",
       }} >
          <div style={{ width: "50vw", height: "100%",margin:"0%" }}>
            <Maps/>
          </div>
      
      </div>
    </>
  );
}

export default App;
