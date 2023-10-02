import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="xyz">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
