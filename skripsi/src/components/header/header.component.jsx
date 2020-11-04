import React from "react";
import "./header.styles.scss";

const Header = () => (
  <div className="container background-add" data-aos="fade-right"> 
    <nav className="navbar navbar-light">
      <a className="navbar-brand text-white visibility-none">
        Medical Image Analysis
      </a>
      <form className="form-inline">
        <a className="navbar-brand text-white">Home</a>
      </form>
    </nav>
  </div>
);

export default Header;
