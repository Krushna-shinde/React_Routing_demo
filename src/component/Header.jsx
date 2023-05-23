import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Personal Page
      </Link>
      <div className="header-right">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
export default Header;
