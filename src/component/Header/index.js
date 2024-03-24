import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <Link to="/">
      <div className="header">Fake App</div>
    </Link>
  );
}

export default Header;
