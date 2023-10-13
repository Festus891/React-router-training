import React from "react";
import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

// Reusable piece of code to protect route
// Also a wrapper component that decides if the component can be render or the user have to login first
export default function RequiredAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}
