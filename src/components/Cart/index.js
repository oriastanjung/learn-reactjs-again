import React, { useContext } from "react";
import cartContext from "../../store/cartContext";
import CartItem from "../CartItem";
import Modal from "../Modal";
import styles from "./index.module.css";



function Cart(props) {

  const dataContext = useContext(cartContext);
  const totalAmount = `$${dataContext.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = id =>{
    dataContext.removeItem(id)
  }
  const cartItemAddHandler = item =>{
    dataContext.addItem({...item, amount :  1})
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {dataContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {dataContext.items.length > 0 && (
          <button className={styles["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
