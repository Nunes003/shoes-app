import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "./ProductList";

const NewArrivals = () => {
  const apiUrl = "https://shoesapp.azurewebsites.net/api/GetArrivals";
  const [products, isLoading, errorMessage] = useFetch(apiUrl);

  if (isLoading) return <div>Loading...</div>;
  if (errorMessage) return <div>Error: {errorMessage}</div>;
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900 mt-4">New arrivals</h2>
        <a href="/products" className="text-sm font-semibold uppercase text-gray-600 hover:underline">
          See all
        </a>
      </div>
      <div className="flex overflow-x-auto m-0 p-0">
        <ProductList data={products}/>
      </div>
    </div>
  );
};

export default NewArrivals;