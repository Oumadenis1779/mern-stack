import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Product Manager</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/create">Add Product</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;