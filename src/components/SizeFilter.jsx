import { useFetch } from "../hooks/useFetch";

const SizeFilter = ({ handleSizeClick, activeSize }) => {
  const apiUrl = "https://shoesapp.azurewebsites.net/api/GetFilters?filter=sizes";
  const [sizes, isLoading, errorMessage] = useFetch(apiUrl);

  return (
    <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : errorMessage ? (
        <p className="text-center text-red-500">Error: {errorMessage}</p> 
      ) : (
        
        <div className="flex flex-wrap -mx-1 mt-3">
          {sizes && sizes.map((size) => (
            <div key={size} className="p-1 w-1/3">
              <button
                className={`w-full h-10 border rounded-md text-sm focus:outline-none focus:ring focus:ring-offset-2 ${
                  size === activeSize ? "bg-blue-500 text-white" : "bg-white border-gray-300"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeFilter;
