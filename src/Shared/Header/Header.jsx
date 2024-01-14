import { useEffect, useState } from "react";
import { barsIcon } from "../../Utils/all-icons-svg";
import Identity from "./Identity";
import NavItems from "./NavItems";
import SearchCart from "./SearchCart";
import SideNav from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center shadow-md shadow-primary/20 px-4 z-20 top-0 min-w-full sticky bg-white">
        <div>
          <Identity />
        </div>

        <ul className="hidden lg:flex items-center gap-5">
          <NavItems />
        </ul>

        <ul className="hidden md:flex items-center gap-4">
          <SearchCart />
        </ul>

        {/* toggle button */}
        <button onClick={toggle} className="lg:hidden text-blue py-5 px-3">
          <span className="text-3xl">{barsIcon}</span>
        </button>

        {/* side navbar */}
        <SideNav isOpen={isOpen} toggle={toggle} />
      </nav>
    </div>
  );
};

export default Header;
