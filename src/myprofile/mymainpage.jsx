import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Main from "./port";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
import cs from './myport.module.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

function App() {
   const [sidebarActive, setSidebarActive] = useState(false);
  
   const toggleSidebar = () => {
      setSidebarActive(!sidebarActive);
   };

   const closeSidebar = () => {
      setSidebarActive(false);
   };

   return (
      <Router>
         <div>
            {/* Sidebar Toggle Button */}
            <div className={cs.side} onClick={toggleSidebar}>
               {sidebarActive ? <FaTimes /> : <FaBars />}
            </div>

            {/* Sidebar Navigation */}
            <div className={`${cs.sidebar} ${sidebarActive ? cs.active : ""}`} style={{ height: sidebarActive ? "300px" : "0" }}>
               {sidebarActive && (
                  <div className={cs.sidebarContent}>
                     <div className={cs.icc} data-label="Home">
                        <NavLink to="/" className={({ isActive }) => `${cs.ic} ${isActive ? "active" : ""}`} onClick={closeSidebar}>
                           <FaHome />
                        </NavLink>
                     </div>
                     <div className={cs.icc} data-label="Aboutme">
                        <NavLink to="/about" className={({ isActive }) => `${cs.ic} ${isActive ? "active" : ""}`} onClick={closeSidebar}>
                           <FaUser />
                        </NavLink>
                     </div>
                     <div className={cs.icc} data-label="Accomplishments">
                        <NavLink to="/work" className={({ isActive }) => `${cs.ic} ${isActive ? "active" : ""}`} onClick={closeSidebar}>
                           <FaBriefcase />
                        </NavLink>
                     </div>
                     <div className={cs.icc} data-label="Contact">
                        <NavLink to="/contact" className={({ isActive }) => `${cs.ic} ${isActive ? "active" : ""}`} onClick={closeSidebar}>
                           <FaEnvelope />
                        </NavLink>
                     </div>
                  </div>
               )}
            </div>

            {/* Routes */}
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/about" element={<About />} />
               <Route path="/work" element={<Work />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
