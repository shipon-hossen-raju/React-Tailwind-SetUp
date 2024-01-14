import { useState } from "react";

// svg icons
import { useNavigate } from "react-router-dom";
import { tollyIcon } from "../../../Utils/all-icons-svg";
import useProductsContext from "../../../hooks/useProductsContext";
import CartItem from "./CartItem";

const AddToCart = () => {
  const { addToCart } = useProductsContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState(false);

  // console.log("addToCart ", addToCart);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onDoubleClick={() => navigate("/process")}
        className="w-10 h-10 flex items-center justify-center text-green hover:bg-green/10 rounded-full duration-300 z-40 relative"
      >
        <div>
          <span
            className={`w-10 h-10 inline-flex justify-center items-center hover:bg-primary/15 p-2 rounded-full transition duration-300 ${
              open && "bg-primary/15"
            }`}
          >
            {tollyIcon}
          </span>
          <span className="w-5 h-5 bg-primary rounded-full text-sm text-white inline-flex justify-center items-center absolute -top-2 -right-2.5 ">
            {addToCart?.addToCarts}
          </span>
        </div>
      </button>

      {/* Add to Cart  */}
      <div
        className={`absolute top-full right-0 w-[350px] h-[440px] bg-white border border-gray/30 rounded-md shadow-4xl shadow-gray/40 overflow-y-auto ${
          open ? "scale-100" : "scale-0"
        } origin-top-right duration-300 z-30`}
      >
        <div className="flex flex-col items-start gap-1 border-b border-gray/30 py-2 pl-3">
          <h6 className="text-lg font-semibold">Your Added Product</h6>
          <div className="flex items-center gap-4">
            <p>Products: {addToCart?.products?.length || 0} </p>
            <p>Select Items: {addToCart?.addToCarts || 0} </p>
          </div>
        </div>

        {/* message */}
        <div className="relative flex flex-col items-start gap-1 py-3 px-2 border-b border-gray/30  duration-300 ">
          {addToCart?.products?.length
            ? addToCart?.products?.map((product, index) => (
                <button key={index} className="cursor-pointer w-full">
                  <CartItem product={product} setOpen={setOpen} />
                </button>
              ))
            : "No Items Selected"}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
