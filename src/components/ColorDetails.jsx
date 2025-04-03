import React from 'react';

const ColorDetails = ({ colors, selectedColor, setSelectedColor }) => {
  if (!colors || colors.length === 0) {
    return <p>No colors available.</p>;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Select Color:</h3>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              className={`h-10 w-10 rounded-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
                color === selectedColor ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
              onClick={() => setSelectedColor(color)}
            >
              {color === selectedColor && (
               <span className="text-white">✓</span>
              )}
            </button>
            <span className=" mt-1 uppercase">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDetails;
