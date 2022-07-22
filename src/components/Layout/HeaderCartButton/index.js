import React, { useState,useContext, useEffect } from "react";
import cartContext from "../../../store/cartContext";
import CartIcon from "../../Cart/CartIcon";
import styles from "./index.module.css";

function HeaderCartButton(props) {

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

  const dataContext = useContext(cartContext);
  const numberOfCartItems = dataContext.items.reduce((currentNumb, item) => {
    return currentNumb + item.amount
  },
  0);

  const {items} = dataContext;


  const btnClasses = `${styles.button} ${ buttonIsHighlighted ? styles.bump : ''}`
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {setButtonIsHighlighted(false)}, 300)
    return () => {
      clearTimeout(timer);
    }

  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
