import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const HeadLine = () => {
  const url = "https://shoesapp.azurewebsites.net/api/GetHeadline";
  const [headlineData, isLoading, errorMessage] = useFetch(url);
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (headlineData) {
      navigate(`/products/${headlineData.id}`);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="relative">
      <img src={headlineData.image} alt={headlineData.title} className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-8">
        <div className=" bg-opacity-50 p-4 md:p-8 rounded-md">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-black font-bold mb-2">
            {headlineData.title}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-black mb-4">
            {headlineData.text}
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-black mb-4 max-w-md">
            {headlineData.description}
          </p>
          <button
            onClick={handleDetailsClick}
            className="bg-orange-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;
