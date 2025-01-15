
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employees from "./components/EmployeeTable";
import Payroll from "./components/Payroll";
import Login from "./components/Login";

function App() {
  return (
    <div className="header">
        <h2>Hello</h2>
        <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>


    </div>
  )
}

export default App;
