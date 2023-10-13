import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import User from "./components/dynamic Router/User";
import UserDetails from "./components/dynamic Router/UserDetails";
import Admin from "./components/dynamic Router/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import RequiredAuth from "./components/RequiredAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="product"
          element={
            <RequiredAuth>
              {" "}
              <Product />
            </RequiredAuth>
          }
        >
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
