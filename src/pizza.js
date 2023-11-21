import React, { useState } from "react";

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
    <form id="pizza-form">
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
    </form>
  );
};

export default OrderForm;
