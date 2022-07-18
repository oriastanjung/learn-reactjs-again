import React, {useState} from "react";
import Cart from "./components/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false)


  const showCartHandler = () =>{
    setShowCart(true)
  }
  const hideCartHandler = () =>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
      <main>
        <Meals></Meals>
        
      </main>
    </CartProvider>
  );
}

export default App;
