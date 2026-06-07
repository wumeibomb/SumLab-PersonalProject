import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from "react";
import Adminportal from "./components/Adminportal";
import Shop from "./components/Shop";
import Home from "./components/Home";
import './App.css' 


function App(){
  return (
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
)
}


export default App