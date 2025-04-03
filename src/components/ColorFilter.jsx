import { useFetch } from "../hooks/useFetch";

const ColorFilter = ({ handleColorClick, activeColor }) => {
  const apiUrl =
    "https://shoesapp.azurewebsites.net/api/GetFilters?filter=colors";
  const [colors, isLoading, errorMessage] = useFetch(apiUrl);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>Error: {errorMessage}</p>
      ) : (
        <div className="flex flex-wrap mx-1">
          {colors &&
            colors.map((color) => (
              <div key={color.name} className="p-1 w-1/4 text-center">
                <button
                  className={`h-10 w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    color.name === activeColor
                      ? "ring-2 ring-blue-500"
                      : "border border-gray-300"
                  }`}
                  style={{ backgroundColor: color.code }}
                  onClick={() => handleColorClick(color.name)}
                >
                  {color.name === activeColor && (
                    <span className="text-black">✓</span>
                  )}
                </button>
                <div className="mt-1 text-xs">{color.name}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
