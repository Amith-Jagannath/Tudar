import React from "react";
import AuthProvider from "./AuthProvider";
const Navbar = () => {
  return (
    <div>
      <h1>Tudar</h1>

      <AuthProvider />
    </div>
  );
};

export default Navbar;
