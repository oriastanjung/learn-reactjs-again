import React from "react";
import Modal from "../Modal";
import styles from "./index.module.css";
function Cart(props) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 13.0,
        },
        {
          id: "c2",
          name: "Sausege",
          amount: 5,
          price: 43.0,
        },
      ].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>39.2</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={styles['button']}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
