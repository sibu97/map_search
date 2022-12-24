import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import Maps from "./components/Map";
import SearchBox from "./components/SearchBox";


function App() {
 
  return (
    <div  className="App">
      <div style={{ backgroundColor: 'teal', height: "50px", width: "100vw" }}>
        <Navbar/>
      </div>
     <div  style={{
        display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "93vh",
       }} >
          <div style={{ width: "50vw",height:'100%'}}>
            <Maps/>
        </div>
        <div style={{ border:"2px solid red",width: "50vw"}}>
        <SearchBox/>
         </div>
      </div>
    </div>
  );
}

export default App;
