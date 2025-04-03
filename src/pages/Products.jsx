// Products.js
import { useState } from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import OrderedList from "../components/OrdereList";

const Products = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const setFilterColor = (color) => {
    if (selectedColors.some((item) => item === color)) {
      setSelectedColors(selectedColors.filter((item) => item !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const setFilterSize = (size) => {
    if (selectedSizes.some((item) => item === size)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const setFilterCategory = (category) => {
    if (selectedCategories.some((item) => item === category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const resetFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategories([]);
    
  };

  return (
    <div className="mt-10">
      <Layout>
        <div className="flex p-4">
          <Filter
            handleColorClick={setFilterColor}
            activeColors={selectedColors}
            handleSizeClick={setFilterSize}
            activeSize={selectedSizes}
            handleCategoryClick={setFilterCategory}
            activeCategories={selectedCategories}
            resetFilters={resetFilters} 
          />

          <OrderedList
            selectedColors={selectedColors}
            selectedSizes={selectedSizes}
            selectedCategories={selectedCategories}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Products;
