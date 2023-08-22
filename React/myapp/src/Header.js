import React from "react";
import About from "./About";
import Contact from "./Contact";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Home</h1>
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
