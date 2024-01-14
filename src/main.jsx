import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./Context/ProductContext.jsx";
import Routers from "./Routes/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ProductProvider>
        <RouterProvider router={Routers} />
        <Toaster
          position="bottom-right"
          gutter={8}
          toastOptions={{
            duration: 5000,
            loading: {
              duration: 3000,
            },
          }}
        />
      </ProductProvider>
    </React.StrictMode>
  </>
);
