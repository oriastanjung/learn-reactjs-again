import React from "react";
import Card from "../Card";
import MealItem from "../MealItem";
import styles from "./index.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  const itemList = DUMMY_MEALS.map((item) => {
    return (
      <MealItem
        id={item.id}
        key={item.id}
        name={item.name}
        desc={item.description}
        price={item.price}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>{itemList}</Card>
    </section>
  );
}

export default AvailableMeals;
