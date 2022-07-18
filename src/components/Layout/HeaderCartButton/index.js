import React, { useContext } from "react";
import cartContext from "../../../store/cartContext";
import CartIcon from "../../Cart/CartIcon";
import styles from "./index.module.css";

function HeaderCartButton(props) {
  const dataContext = useContext(cartContext);
  const numberOfCartItems = dataContext.items.reduce((currentNumb, item) => {
    return currentNumb + item.amount
  },
  0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
