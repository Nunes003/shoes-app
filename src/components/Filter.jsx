import React from "react";
import ColorsFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import CategoriesFilter from "./CategoriesFilter";

const Filter = ({
  handleColorClick,
  activeColors,
  handleSizeClick,
  activeSize,
  handleCategoryClick,
  activeCategory,
  resetFilters,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-bold text-gray-700">Filters</h1>
        <button
          onClick={resetFilters}
          className="text-black px-4 py-2 rounded underline"
        >
          Clean
        </button>
      </div>

      <p className="text-lg font-semibold text-gray-600 mb-4">Category</p>
      <CategoriesFilter
        handleCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />

      <p className="text-lg font-semibold text-gray-600 mb-4">Filter by</p>
      <SizeFilter handleSizeClick={handleSizeClick} activeSize={activeSize} />

      <p className="text-lg font-semibold text-gray-600 mb-4">Colors</p>
      <ColorsFilter
        handleColorClick={handleColorClick}
        activeColors={activeColors}
      />
    </div>
  );
};

export default Filter;
