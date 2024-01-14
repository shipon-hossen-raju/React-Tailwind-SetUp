import { createBrowserRouter } from "react-router-dom";
import NotFound from "../ErrorPage/NotFound";
import MainLt from "../Layouts/MainLt";
import About from "../Pages/About/";
import Authentication from "../Pages/Authentication/Authentication";
import Contact from "../Pages/Contact/";
import Home from "../Pages/Home/";

// browser route
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLt />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default Routers;
