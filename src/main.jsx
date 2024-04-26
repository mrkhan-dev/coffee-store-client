import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "add_product",
    element: <AddProduct />,
  },
  {
    path: "update_product/:id",
    element: <UpdateProduct />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
