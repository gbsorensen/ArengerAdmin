// src/components/Dashboard.js
// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/employees">Manage Employees</Link>
        <Link to="/payroll">Payroll</Link>
      </nav>

      <header className="App-header">
        <p>Arengerph</p>
      </header>
    </div>
  );
};

export default Dashboard;

