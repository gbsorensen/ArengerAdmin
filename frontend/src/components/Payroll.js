// src/components/Payroll.js
import React, { useState } from "react";

const Payroll = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    // Fetch payroll data based on date range
    console.log(`Filter payroll from ${startDate} to ${endDate}`);
  };

  return (
    <div>
      <h2>Payroll Management</h2>
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label>End Date:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Payroll;
