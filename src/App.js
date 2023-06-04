import Form from "./components/Form";
import React, { useState } from "react";
import ProductStore from "./components/productStore";
import MainPage from "./components/MainPage";
import CartButton from "./components/Cart/CartButton";
import Cart from "./components/Cart/Cart";

function App() {
  const[cartOpen,setCartOpen]=useState(false)
  const cartOpenHandler=()=>{
    setCartOpen(true)
  }
  return (
    <div className="App">
      <CartButton cartOpen={cartOpenHandler} ></CartButton>
      <MainPage></MainPage>
      {cartOpen?<Cart></Cart>:""}
    </div>
  );
}

export default App;
