import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const useProductsContext = () => {
  const products = useContext(ProductContext);
  return { ...products };
};

export default useProductsContext;
