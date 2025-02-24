import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import cs from "./myport.module.css"; // Make sure the CSS is correctly imported

// Layout Component to include sidebar and content
const Layout = ({ children }) => {
  return (
    <div className={cs.main}>
      {/* Sidebar */}
      <div className={cs.sidebar}>
        <div className={cs.sidebarContent}>
          <div className={cs.icc} data-label="Home">
            <NavLink to="/" exact activeClassName={cs.activeLink} className={cs.ic}>
              <FaHome />
            </NavLink>
          </div>
          <div className={cs.icc} data-label="User">
            <NavLink to="/about" activeClassName={cs.activeLink} className={cs.ic}>
              <FaUser />
            </NavLink>
          </div>
          <div className={cs.icc} data-label="Work">
            <NavLink to="/work" activeClassName={cs.activeLink} className={cs.ic}>
              <FaBriefcase />
            </NavLink>
          </div>
          <div className={cs.icc} data-label="Contact">
            <NavLink to="/contact" activeClassName={cs.activeLink} className={cs.ic}>
              <FaEnvelope />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cs.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
