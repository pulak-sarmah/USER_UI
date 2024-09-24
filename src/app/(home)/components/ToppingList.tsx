"use client";
import React from "react";
import ToppingCard, { Topping } from "./ToppingCard";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/chicken.jpeg",
    price: 100,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Jelapeno",
    image: "/jalapinio.jpeg",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/cheese.jpeg",
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadySelected = selectedToppings.some(
      (element) => element.id === topping.id
    );

    if (isAlreadySelected) {
      setSelectedToppings((prev) =>
        prev.filter((element) => element.id !== topping.id)
      );
    } else {
      setSelectedToppings((prev) => [...prev, topping]);
    }
  };

  return (
    <section className="mt-6">
      <h4 className="text-sm mb-2">Extra toppings</h4>

      <div className="grid grid-cols-12 gap-14">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              key={topping.id}
              topping={topping}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
