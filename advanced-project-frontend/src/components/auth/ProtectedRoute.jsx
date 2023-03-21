import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute({ element }) {
  const isAuthenticated = Cookies.get("Authorisation");

  if (isAuthenticated === undefined) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default PrivateRoute;
