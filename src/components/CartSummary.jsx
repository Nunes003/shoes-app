import React from 'react';

const CartSummary = ({ subtotal, shippingCost }) => {
  const total = subtotal + shippingCost;

  return (
    <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="text-gray-700">{subtotal.toFixed(2)}€</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span className="text-gray-700">{shippingCost.toFixed(2)}€</span>
      </div>
      <div className="border-b border-gray-300 my-4"></div>
      <div className="flex justify-between mb-4">
        <span>Total</span>
        <span className="text-xl text-black font-bold">
          {total.toFixed(2)}€
        </span>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
