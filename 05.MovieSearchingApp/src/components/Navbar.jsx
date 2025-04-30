import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div>Movie App▶️ </div>
      <div className="search-bar">
        <input type="text" placeholder="what movie you are thinking about..." />
      </div>
      <div>Theme</div>
    </div>
  );
};

export default Navbar;
