import React from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from './index.module.css';

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>5</span>
    </button>
  );
}

export default HeaderCartButton;
