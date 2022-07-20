import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const MainRoutes = () => {
  const elements = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return elements;
};

export default MainRoutes;
