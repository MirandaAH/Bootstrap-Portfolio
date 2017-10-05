import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) =>
      <nav className="navbar navbar-toggleable-md">
        <Link to="/" className="name">Miranda Hane</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/Miranda-Hane/about" className="routes">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Miranda-Hane/portfolio" className="routes">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>



export default Navbar;
