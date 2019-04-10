import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>GIPHEE Battle</h1>
      <div className="linkContainer">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
