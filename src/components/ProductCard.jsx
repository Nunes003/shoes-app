import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, color, size }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    if (favorites.some((fav) => fav.id === product.id)) {
      setIsFavorite(true);
    }
  }, [product]);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    const updatedFavorites =
      JSON.parse(sessionStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const filteredFavorites = updatedFavorites.filter(
        (fav) => fav.id !== product.id
      );
      sessionStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    } else {
      updatedFavorites.push(product);
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      onClick={handleClick}
    >
      <button onClick={toggleFavorite} className="absolute top-0 right-0 m-2">
        <img
          src={
            isFavorite ? "/coracao-on.png" : "/coracao-off.png"
          }
          alt={isFavorite ? "Unmark as favorite" : "Mark as favorite"}
          className="w-6 h-6"
        />
      </button>
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="w-full object-cover object-center"
      />
      <div className="p-4">
        <p className="text-gray-500 text-xs uppercase">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {color && <p>Color: {color}</p>}
        {size && <p>Size: {size}</p>}
        <div className="flex items-baseline space-x-2">
          {product.priceBefore ? (
            <>
              <span className="mr-2 text-gray-500 line-through">
                {product.priceBefore}€
              </span>
              <span className="text-ls text-orange-500">{product.price}€</span>
            </>
          ) : (
            <span className="text-lg text-gray-700">{product.price}€</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
