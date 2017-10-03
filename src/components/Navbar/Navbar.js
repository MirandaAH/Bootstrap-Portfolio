import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-toggleable-md">
        <Link to="/" className="name">Miranda Hane</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="routes">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="routes">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>);

  }
}


export default Navbar;
