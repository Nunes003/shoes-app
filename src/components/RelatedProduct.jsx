import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "./ProductList";

const RelatedProduct = ({ id }) => {
  const url = `https://shoesapp.azurewebsites.net/api/GetRelatedProducts?id=${id}`;
  const [products, isLoading, errorMessage] = useFetch(url);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900">Related Products</h2>
        <a
          href="/products"
          className="text-sm font-semibold uppercase text-gray-600 hover:text-gray-900 hover:underline"
        >
          See all
        </a>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto">
        <ProductList data={products}/>
      </div>
    </div>
  );
};

export default RelatedProduct;
