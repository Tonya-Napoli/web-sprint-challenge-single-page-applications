import React, { useState } from "react";
import axios from "axios";

const PizzaForm = () => {
  const [name, setName] = useState("");
  const [pizzaSize, setPizzaSize] = useState("small");
  const [toppings, setToppings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (newName.length < 2) {
      setErrors({ ...errors, name: "name must be at least 2 characters" });
    } else {
      setErrors({ ...errors, name: null }); // Clear error message if name is valid
    }
  };

  const handleSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const checkedTopping = event.target.value;
    if (toppings.includes(checkedTopping)) {
      setToppings(toppings.filter((topping) => topping !== checkedTopping));
    } else {
      setToppings([...toppings, checkedTopping]);
    }
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      name: name,
      size: pizzaSize,
      toppings: toppings,
      specialInstructions: specialInstructions,
    };

    // Send order data to backend endpoint
    axios.post("https://reqres.in/api/orders", orderData)
    .then((response) => {
      const orderRecord = response.data;

      // Display the order record
      console.log("Order record:", orderRecord);
    })
    .catch((error) => {
      console.error("Error submitting order: ", error);
    })
  

    // Clear form fields after submission
    setName("");
    setPizzaSize("small");
    setToppings([]);
    setSpecialInstructions("");
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
        required
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <label>Pizza Size:</label>
      <select id= "size-dropdown" value= {pizzaSize} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Toppings:</label>
      <div>
        <input
          type="checkbox"
          id="mushroom"
          value="mushroom"
          checked={toppings.includes("mushroom")}
          onChange={handleToppingChange}
        />
        <label for="mushroom">Mushroom</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="jalapeno"
          value="jalapeno"
          checked={toppings.includes("jalapeno")}
          onChange={handleToppingChange}
        />
        <label for="jalapeno">Jalapeno</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="spinach"
          value="spinach"
          checked={toppings.includes("spinach")}
          onChange={handleToppingChange}
        />
        <label for="spinach">Spinach</label>
        </div>
        
      <div>
        <input
          type="checkbox"
          id="onion"
          value="onion"
          checked={toppings.includes("onion")}
          onChange={handleToppingChange}
        />
        <label for="onion">Onion</label>
      </div>

      <label>Special Instructions:</label>
      <textarea
        id="special-text"
        placeholder = "Enter any special instructions"
      textarea/>

    <button id="order-button" type="submit">Add to Order</button>
      
    </form>
  );
};

export default PizzaForm;
