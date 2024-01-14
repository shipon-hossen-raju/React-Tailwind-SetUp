import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useUser from "../hooks/useUser";

export const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const { axiosSecure } = useAxiosSecure();
  const { user } = useUser();
  const [products, setProducts] = useState();
  const [reCall, setReCall] = useState(true);
  const [addToCart, setAddToCart] = useState([]);

  // console.log("context");

  useEffect(() => {
    if (user?._id) {
      axiosSecure.get(`/api/add-to-cart/${user?._id}`).then(({ data }) => {
        // console.log("add to cart products ", data);
        setAddToCart({
          addToCarts: data?.data?.addToCarts,
          products: data?.data?.products,
        });
      });
    }
  }, [user, reCall]);

  const product = {
    products,
    setProducts,
    reCall,
    setReCall,
    addToCart,
    setAddToCart,
  };

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
