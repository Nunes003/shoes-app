import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ProductDetails from "../components/ProductDetails";


const Product = () => {
  const { id } = useParams();
  const url = `https://shoesapp.azurewebsites.net/api/GetShoes?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);

  return (
    <div>
      {data && <ProductDetails product={data} />}
    </div>
  );
};

export default Product;
