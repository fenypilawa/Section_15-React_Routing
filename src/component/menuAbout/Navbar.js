import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="col-md-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about/about-app">
            About App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about/about-author">
            About Author
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
