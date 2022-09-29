import React from "react";
import { NavLink } from "react-router-dom";
import Todos from './Todos'

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="col-md-9">
        <h2 className="header"> TODOS </h2>
        <Todos></Todos>
      </div>
    </div>
  );
};

export default Home;
