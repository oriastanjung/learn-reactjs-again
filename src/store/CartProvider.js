import React, {useReducer} from "react";
import CartContext from "./cartContext";

const initialCartState = {
  items: [],
  totalAmount: 0
}

const cartReducerDispatch = (state, action) =>{
  if(action.type === "ADD_ITEM") {
    const updatedTotalItem = state.totalAmount + action.item.price* action.item.amount;

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex];
    
    let updatedItems;
    
    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount : existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount : updatedTotalItem
    }
  }

  else if (action.type === 'REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex]

    const updatedTotalAmount = state.totalAmount - existingItem.price

    let updatedItems;
    if(existingItem.amount === 1) {
       updatedItems = state.items.filter((item) => item.id !== action.id )

    } else{
      const updatedItem = {...existingItem, amount : existingItem.amount -1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount : updatedTotalAmount
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
