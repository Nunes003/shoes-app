import React from 'react';

const SizeDetails = ({ sizes, selectedSize, setSelectedSize }) => {
  if (!Array.isArray(sizes) || sizes.length === 0) {
    return <p>No sizes available.</p>;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`h-10 w-10 md:w-auto px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
              size === selectedSize ? 'bg-black text-white' : 'bg-white'
            }`}
            aria-label={`Size ${size}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeDetails;
