import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "./ProductList";

const OrderedList = ({ selectedColors, selectedSizes, selectedCategories }) => {
  const [sortOption, setSortOption] = useState("");
  const [sortedData, setSortedData] = useState([]);

  // Updated URL
  const [data, isLoading, errorMessage] = useFetch(
    `https://shoesapp.azurewebsites.net/api/GetShoes?category=${JSON.stringify(
      selectedCategories
    )}&color=${JSON.stringify(selectedColors)}&size=${JSON.stringify(
      selectedSizes
    )}&sortBy=${sortOption}`
  );

  useEffect(() => {
    if (data) {
      let sorted = [...data];

      switch (sortOption) {
        case "price-asc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "name":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }

      setSortedData(sorted);
    }
  }, [data, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="mx-auto max-w-screen-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">All Products</h1>
        <div className="relative">
          <select
            onChange={handleSortChange}
            value={sortOption}
            className="appearance-none rounded bg-white px-4 py-2 pr-8 shadow focus:outline-none"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="price-desc">High to Low</option>
            <option value="price-asc">Low to High</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.415 4.209c-0.533 0.481-1.408 0.481-1.942 0l-4.415-4.209c-0.408-.418-0.436-1.17 0-1.615z" />
            </svg>
          </div>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500">Error: {errorMessage}</p>
      ) : (
        <ProductList data={sortedData} />
      )}
    </div>
  );
};

export default OrderedList;
