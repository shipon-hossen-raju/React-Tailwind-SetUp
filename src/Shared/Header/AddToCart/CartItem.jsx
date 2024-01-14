import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { cancelIcon } from "../../../Utils/all-icons-svg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProductsContext from "../../../hooks/useProductsContext";

const CartItem = ({ product, setOpen }) => {
  const { setReCall } = useProductsContext();
  const navigate = useNavigate();
  const { axiosSecure } = useAxiosSecure();

  const handleRemoveCart = (id) => {
    // console.log("product ", product);
    // console.log("id ", id);
    if (id) {
      axiosSecure
        .delete(`/api/add-to-cart-delete/${id}`)
        .then(({ data }) => {
          setReCall((prev) => !prev);
          toast.success("Select Item Delete Successful!");
          // console.log("data ", data);
        })
        .catch((err) => {
          toast.error("Select Item Deleting Wrong!");
          console.log("error ", err);
        });
    }
  };

  return (
    <div className="relative hover:bg-secondary group transition duration-300">
      <div
        onClick={() => {
          navigate("/process", { state: { productId: product?._id } });
          setOpen(false);
        }}
        className="py-2 flex items-center justify-center gap-2 "
      >
        <figure className="transition duration-300 w-16 h-16 p-1.5 flex items-center justify-center bg-secondary group-hover:bg-white">
          <img
            className="w-full h-full"
            src={product?.variation?.images[0]}
            alt={product?.title}
          />
        </figure>
        <div className="relative">
          <h4 className="text-lg font-semibold text-left">{product?.title}</h4>

          <div className="flex items-center gap-4">
            <p className="text-base"> Products: {product?.productCart || 0} </p>
          </div>
        </div>
      </div>

      {/* delete cart success */}
      <button
        onClick={() => handleRemoveCart(product?.cartId)}
        className="w-7 h-7 p-1.5 rounded-full absolute bottom-2 right-2 transition duration-300 hover:bg-primary/25 hidden opacity-0 group-hover:block group-hover:opacity-100"
      >
        <span className="w-full h-full hidden opacity-0 group-hover:block group-hover:opacity-100">
          {cancelIcon}
        </span>
      </button>
    </div>
  );
};

export default CartItem;
