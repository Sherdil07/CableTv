import React from "react";
import "../styles/Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="side-sidebar">
        <ul>
          <li>Pages</li>
          <li>Media</li>
          <li>Zipcodes</li>
          <li>Users</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="content">{/* Your dashboard content goes here */}</div>
    </div>
  );
}

export default Dashboard;
