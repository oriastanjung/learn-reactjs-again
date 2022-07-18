import React, {useReducer} from "react";
import CartContext from "./cartContext";

const initialCartState = {
  items: [],
  totalAmount: 0
}

const cartReducerDispatch = (state, action) =>{
  if(action.type === "ADD_ITEM") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalItem = state.totalAmount + action.item.price* action.item.amount;
    return {
      items: updatedItem,
      totalAmount : updatedTotalItem
    }
  }
  return initialCartState;
}
function CartProvider(props) {

  const [cartState, dispatchCartAction] = useReducer(cartReducerDispatch, initialCartState);


  const addItemCartHandler = (item) => {
    dispatchCartAction({type : 'ADD_ITEM', item : item})
  };
  const removeItemCartHandler = (id) =>{
    dispatchCartAction({type : "REMOVE_ITEM", id : id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
