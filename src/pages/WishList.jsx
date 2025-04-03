import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

const WishList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(sessionStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="mt-10">
      <Layout>
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Wish List</h1>
          {favorites.length === 0 ? (
            <p className="text-gray-600">Your WishList is empty.</p>
          ) : (
            <ProductList data={favorites} />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default WishList;
