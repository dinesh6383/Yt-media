import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="navbar">
      <div className="app-logo">
        <img src="/images/u-tube-logo.png" alt="app-logo"></img>
        <span>YouTube</span>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
