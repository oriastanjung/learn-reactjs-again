import React from "react";
import styles from "./index.module.css";

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
          
      </div>
    </li>
  );
}

export default MealItem;
