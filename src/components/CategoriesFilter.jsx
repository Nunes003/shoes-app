import React from "react";
import { useFetch } from "../hooks/useFetch";

const CategoriesFilter = ({ handleCategoryClick, activeCategory }) => {
  const apiUrl =
    "https://shoesapp.azurewebsites.net/api/GetFilters?filter=categories";
  const [categories, isLoading, errorMessage] = useFetch(apiUrl);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>Error: {errorMessage}</p>
      ) : (
        <div className="-mx-2">
          {categories &&
            categories.map((category) => (
              <div key={category} className="mb-2 w-1/6 px-2">
                <label className="inline-flex items-center justify-between">
                  <span className="mr-2 text-sm">{category}</span>
                  <div
                    className={`border-2 rounded ${
                      category === activeCategory
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300"
                    } h-5 w-5 flex items-center justify-center`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category === activeCategory && (
                       <span className="text-white">✓</span>
                    )}
                  </div>
                </label>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesFilter;
