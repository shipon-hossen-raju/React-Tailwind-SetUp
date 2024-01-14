import { heartIcon, magnifyGlass } from "../../Utils/all-icons-svg";
import useProductsContext from "../../hooks/useProductsContext";
import useUser from "../../hooks/useUser";
import AddToCart from "./AddToCart/AddToCart";
import NavUser from "./NavUser";

export default function SearchCart() {
  const { addToCart } = useProductsContext();
  const { user } = useUser();

  // console.log("addToCart ", addToCart);

  return (
    <>
      <li>
        <div className="relative bg-secondary py-2 px-3 rounded-[4px]">
          <input
            placeholder="What are you looking for?"
            type="text"
            id="search"
            className="bg-transparent focus:outline-none pr-5"
          />

          <label
            className="absolute top-1/2 -translate-y-1/2 right-1 "
            htmlFor="search"
          >
            <span> {magnifyGlass} </span>
          </label>
        </div>
      </li>
      <div className="flex items-center gap-4">
        <li>
          <span className="w-8 h-8 inline-block">{heartIcon}</span>
        </li>
        <li className="relative">
          <AddToCart />
        </li>

        {user?.email && (
          <li>
            <NavUser />
          </li>
        )}
      </div>
    </>
  );
}
