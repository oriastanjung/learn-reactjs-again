import React, {useContext} from "react";
import MealItemForm from "../MealItemForm";
import styles from "./index.module.css";
import cartContext from "../../store/cartContext"

function MealItem(props) {
    const dataContext = useContext(cartContext);
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler = (amount) => {
      dataContext.addItem({
        id: props.id,
        name: props.name,
        amount : amount,
        price : props.price
      })
    }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
