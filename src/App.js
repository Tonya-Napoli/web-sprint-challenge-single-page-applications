import React, {useState, useEffect} from "react"
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import OrderForm from './pizza' // Import the OrderForm component

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bloomtech Eats</h1>

      <p>The BEST Cheeseless Pizza in Town!</p>

      <button
        id="order-pizza"
        type="button"
        onClick={(e) => {
          e.preventDefault(); // Prevent default hyperlink behavior
          navigate("/pizza"); // Trigger programmatic navigation
        }}
      >
        Order Pizza Now!
      </button>

      <Routes>
        <Route path="/pizza" element={<OrderForm />} />
      </Routes>
    </div>
  );
};

export default App;