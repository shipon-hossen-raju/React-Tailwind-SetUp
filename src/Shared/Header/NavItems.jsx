import { NavLink, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

const NavItems = () => {
  const location = useLocation();
  const { user } = useUser();
  // console.log("user ", user);

  const navbarData = [
    {
      label: "Home",
      route: "/",
      name: "home",
      id: "home",
      icons: null,
    },
    {
      label: "Contact",
      route: "/contact",
      name: "contact",
      id: "contact",
      icons: null,
    },
    {
      label: "About",
      route: "/about",
      name: "about",
      id: "about",
      icons: null,
    },
  ];

  return (
    <>
      {/* <ul className="flex flex-col md:flex-row justify-end items-center gap-3"> */}
      {navbarData &&
        navbarData.map((item, idx) => (
          <li key={idx} className="">
            <NavLink
              className={({ isActive }) =>
                `py-3 sm:py-4 md:py-6 lg:py-8 md:px-3 block border-b-2 lg:border-t-4 hover:text-primary hover:border-t-primary md:hover:border-b-primary border-t-transparent transition duration-300 ${
                  isActive == item?.route || location.hash == item?.id
                    ? "border-primary text-primary hover:text-primary/60"
                    : "border-transparent"
                }`
              }
              to={item?.route}
            >
              <span> {item?.label} </span>
            </NavLink>
          </li>
        ))}

      {!user?.email && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `py-8 px-3 block border-b-2 lg:border-t-4 hover:text-primary hover:border-t-primary md:hover:border-b-primary border-t-transparent transition duration-300 ${
                isActive
                  ? "border-primary text-primary hover:text-primary/60"
                  : "border-transparent"
              }`
            }
            to="/authentication"
          >
            <span> Sign Up </span>
          </NavLink>
        </li>
      )}

      {/* </ul> */}
    </>
  );
};

export default NavItems;
