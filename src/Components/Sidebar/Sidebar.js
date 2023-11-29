import React from "react";
import logo from "../Images/Logo.png";
import "./sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) =>{



  return (
    <>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <button className="toggle-button">&#9776;</button>
      </div>

      <div className={`text-center sideImg  ${isOpen ? 'open' : ''}`}>
        <img src={logo} alt="Logo" />
      </div>

      <nav
        id="sidebar"
        className={`text-center pt-3 p-2 mb-3  ${isOpen ? 'open' : ''}`}
      >
        <ul className={`list-unstyled ${isOpen ? 'open' : ''}`}>
          <li className="py-1">
            <a className="nav-link cust-sideBtn" href="#converter">
              <i className="fa-solid fa-right-left me-2"></i> Converter
            </a>
          </li>
          <li className="mt-2 py-1 cust-sideBtnCale">
            <a className="nav-link cust-sideBtn " href="#calculator">
              <i className="fa-solid fa-calculator me-2"></i> Calculator
            </a>
          </li>
          <li className="mt-2 py-1 mb-2">
            <a className="nav-link cust-sideBtn" href="#weather">
              <i className="fas fa-cloud-sun me-2"></i> Weather
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
