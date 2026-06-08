import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from "react";
import Adminportal from "./components/Adminportal";
import Shop from "./components/Shop";
import Home from "./components/Home";
import './App.css' 


function App(){
  return (
    <div style={{backgroundColor: "#2d88d2"}}>
    <BrowserRouter>
    <nav>
      <Link style={{padding: "50px"}} to = "/">Home </Link>
      <Link style={{padding: "50px"}} to= "/Shop">Shop </Link>
      <Link style={{padding: "50px"}} to= "/Adminportal">Admin Portal</Link>
      </nav>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/Shop" element={<Shop />} />
      <Route path = "/Adminportal" element={<Adminportal />} />
    </Routes>
</BrowserRouter>  
 </div>
)
}


export default App