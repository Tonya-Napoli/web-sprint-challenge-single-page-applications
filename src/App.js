import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import Home from './home'  //import Home component
import OrderPizza from './order' //import OrderPizza component

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
  
      <p>The BEST Cheeseless Pizza in Town!</p>

      <nav>
        <Link to="/"Home></Link>
        <Link to="/order-pizza">Order Your Pizza Now!</Link>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-pizza" element={<OrderPizza />} />
        </Routes>
    </div>
  )}  
  

export default App;
