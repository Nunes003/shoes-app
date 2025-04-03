import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Layout from "./Layout";
import RelatedProduct from "./RelatedProduct";
import SizeDetails from "./SizeDetails";
import ColorDetails from "./ColorDetails";
import Tabs from "./Tabs";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const queryString = id !== undefined ? `?id=${id}` : "";
  const url = "https://shoesapp.azurewebsites.net/api/GetShoes" + queryString;
  const [data, isLoading, errorMessage] = useFetch(url);

  const navigate = useNavigate();

  const addToBag = (product) => {
    const productWithDetails = { ...product, selectedColor, selectedSize };
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(productWithDetails);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  

  return (
    <div className="mt-10">
      <Layout>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : errorMessage ? (
          <p className="text-red-500 text-center">Error: {errorMessage}</p>
        ) : (
          <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 shadow-xl rounded-xl transition-all duration-300 ease-in-out">
              <div className="flex-none w-full md:w-1/2 lg:w-1/3">
                <img
                  src={`/details_${data.image}`}
                  alt={data.name}
                  className="w-full h-auto object-contain rounded-lg transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="flex-grow">
                <div className="text-gray-600 text-sm uppercase mb-1">
                  {data?.category}
                </div>
                <h1 className="font-bold text-2xl mb-2">{data?.name}</h1>
                <div className="flex items-baseline space-x-2 mb-4">
                  {data.priceBefore ? (
                    <div>
                      <span className="mr-2 text-gray-500 line-through">
                        {data.priceBefore}€
                      </span>
                      <span className="text-lg text-orange-500">
                        {data.price}€
                      </span>
                    </div>
                  ) : (
                    <div className="text-lg text-gray-700">{data.price}€</div>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <ColorDetails
                    colors={data.colors}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                  <SizeDetails
                    sizes={data.size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <button
                    onClick={() => addToBag(data)}
                    className="w-40 mt-4 bg-orange-500 text-white py-2 px-4 rounded disabled:opacity-50"
                    disabled={!selectedColor || !selectedSize}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
    
            <Tabs data={data} />

            <RelatedProduct id={id} />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default ProductDetails;

