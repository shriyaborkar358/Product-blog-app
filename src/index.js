import React from "react";
import ReactDOM from "react-dom/client";

import Home from "../src/views/Home/Home";
import BlogView from "../src/views/BlogView/BlogView";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:id",
    element: <BlogView />,
  },
]);

root.render(<RouterProvider router={router} />);
