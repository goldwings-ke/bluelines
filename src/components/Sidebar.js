import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul style={{columns: "2"}} onClick={showSidebar}>
        <li style={{backgroundColor: "orange"}}><Link to="/">Home</Link></li>
        <li style={{backgroundColor: "orange"}}><Link to="/peopleslist">Lists👥</Link></li> 
        <li style={{backgroundColor: "orange"}}><Link to="/purchases">Purchases</Link></li> 
        <li style={{backgroundColor: "orange"}}><Link to="/reports">Reports</Link></li>
        <li style={{backgroundColor: "orange"}}><Link to="/gallery">Gallery</Link></li>
        <li style={{backgroundColor: "orange"}}><Link to="/sales">Sales</Link></li>
       <li style={{backgroundColor: "orange"}}><Link to="/itemslist">Items🛒</Link></li>
        <li style={{backgroundColor: "orange"}}><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;