import React from "react";
import ProductCard from "../components/ProductCard";

const CartProducts = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex flex-col space-y-6 lg:w-2/3">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.uniqueId}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row lg:items-center"
          >
            <div className="relative">
              <ProductCard 
                product={item}
                color={item.selectedColor}
                size={item.selectedSize} 
              />
              <button
                onClick={() => removeFromCart(item.uniqueId)}
                className="text-red-500 hover:text-red-600 absolute top-0 left-0 m-2"
              >
                🗑️
              </button>
            </div>

            <div className="mt-4 lg:ml-4 flex flex-col">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`quantity-select-${item.id}`}
                  className="text-sm font-medium"
                >
                  Quantity:
                </label>
                <select
                  id={`quantity-select-${item.id}`}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="ml-2 border border-gray-300 rounded-md p-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartProducts;
