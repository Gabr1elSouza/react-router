import React from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        {/*<Link to="/">Home</Link>
        <Link to="/about">About</Link>*/}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
