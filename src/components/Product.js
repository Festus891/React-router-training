import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Welcome to product page</h1>
      <input type="search" placeholder="search for product" />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Product;
