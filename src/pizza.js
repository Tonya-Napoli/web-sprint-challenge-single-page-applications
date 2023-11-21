import React, { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters").required("Name is required")
});

const OrderForm = () => {
  const [pizzaSize, setPizzaSize] = useState("small");
  const [pizzaCrust, setPizzaCrust] = useState("thin");
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [toppings, setToppings] = useState([]);

  const handlePizzaSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };

  const handlePizzaCrustChange = (event) => {
    setPizzaCrust(event.target.value);
  };

  const handlePizzaQuantityChange = (event) => {
    setPizzaQuantity(parseInt(event.target.value)); // Convert input value to a number
  };

  const handleToppingChange = (event) => {
    const checkedTopping = event.target.value;
    if (toppings.includes(checkedTopping)) {
      setToppings(toppings.filter((topping) => topping !== checkedTopping));
    } else {
      setToppings([...toppings, checkedTopping]);
    }
  };

  return (
    <form id="size-dropdown">
      <label>Pizza Size:</label>
      <select value={pizzaSize} onChange={handlePizzaSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Pizza Crust Style:</label>
      <select value={pizzaCrust} onChange={handlePizzaCrustChange}>
        <option value="thin">Thin Crust</option>
        <option value="thick">Thick Crust</option>
        <option value="deep-dish">Chicago Deep Dish</option>
      </select>

      <label>Quantity:</label>
      <input
        type="number"
        value={pizzaQuantity}
        onChange={handlePizzaQuantityChange}
        min="1"
      />

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

      <label>Name:</label>
      <input
        type="text"
        id="name-input"
        placeholder = "Enter your name"
        required
      />
    </form>
  );
};

export default OrderForm;
