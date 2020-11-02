import React from "react";
import "../App.css";
import MIKEZLOT from "../assets/img/logos/mzphoto.png";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          
          <img className="LOGO" src={ MIKEZLOT } alt={ MIKEZLOT } />
          {/* <br></br>
          <div className="intro-lead-in">ALBUM COMING SOON</div>
          
          <div className="intro-heading text-uppercase">THESH</div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            BUY NOW!
          </a> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
