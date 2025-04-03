import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CartProducts from "../components/CartProducts";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 3.4;

  useEffect(() => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart = cart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      uniqueId: item.uniqueId || Date.now() + Math.random().toString(16)
    }));
    setCartItems(cart);
    calculateSubtotal(cart);
  }, []);

  const removeFromCart = (uniqueId) => {
    const updatedCart = cartItems.filter((item) => item.uniqueId !== uniqueId);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const updateQuantity = (itemId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const calculateSubtotal = (cart) => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const total = subtotal + shippingCost;

  return (
    <div className="container mx-auto p-6">
      <Layout>
        <div className="flex align-baseline space-x-3 items-center mb-6">
          <h1 className="text-2xl font-bold">Cart</h1>
          <h3 className="text-sm font-semibold">{cartItems.length} products</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <CartProducts 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity}
          />

          <CartSummary
            subtotal={subtotal}
            shippingCost={shippingCost}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
