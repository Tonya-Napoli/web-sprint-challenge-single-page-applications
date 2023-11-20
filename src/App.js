import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import OrderPizza from './order' //import OrderPizza component

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lambda Eats</h1>

      <p>The BEST Cheeseless Pizza in Town!</p>

      <button
        id="order-pizza"
        type="button"
        onClick={(e) => {
          e.preventDefault(); // Prevent default hyperlink behavior
          navigate("/order-pizza"); // Trigger programmatic navigation
        }}
      >
        Order Pizza Now!
      </button>

      <Routes>
        <Route path="/order-pizza" element={<OrderPizza />} />
      </Routes>
    </div>
  );
};

export default App;