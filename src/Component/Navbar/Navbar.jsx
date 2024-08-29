import React, { useState } from "react";
import "./Navbar.css";
import message from "../../assets/envelope-solid.svg";
import map from "../../assets/map-solid.svg";
import facebook from "../../assets/facebook-brands-solid.svg";
import twitter from "../../assets/square-twitter-brands-solid.svg";
import linkedin from "../../assets/linkedin-brands-solid.svg";
import insta from "../../assets/instagram-brands-solid.svg";
import calender from "../../assets/calendar-solid.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="all-nav">
      <div className="first-nav ">
        <div className="first-nav-left">
          <div className="first-nav-left1">
            <img className="icon" src={message} alt="" />
            <span className="span-color">info@company.com</span>
          </div>
          <div className="first-nav-left1">
            <img className="icon" src={map} alt="" />
            <span className="span-color">sunny isless Beach, Fl 33160</span>
          </div>
        </div>
        <div className="first-nav-right">
          <img className="icon2" src={facebook} alt="" />
          <img className="icon2" src={twitter} alt="" />
          <img className="icon2" src={linkedin} alt="" />
          <img className="icon2" src={insta} alt="" />
        </div>
      </div>
      <hr />
      <div className="second-nav">
        <div className="logo-nav">
          <h1>VILLA</h1>
        </div>

        <div>
          <ul className={isOpen ? "link-nav active" : "link-nav"}>
            <div onClick={toggleMenu} className="icon-sidebar">
              <i className="fa fa-bars"> </i>
            </div>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/property">Property</Link>
            </li>
            <li>
              {" "}
              <Link to="/propertys">Property Detals</Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us</Link>
            </li>
            <li>
              <button>
                {" "}
                <img className="icon" src={calender} /> Schedule a visit
              </button>
            </li>
          </ul>
          <div onClick={toggleMenu} className="icon-sidebar">
            <i className="fa fa-bars"> </i>
          </div>
        </div>
      </div>
    </nav>
  );
};
