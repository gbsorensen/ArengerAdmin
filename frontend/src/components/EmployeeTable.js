// src/components/EmployeeTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchEmployees();
    }, []);
  
    const fetchEmployees = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/employees");
          setEmployees(response.data);
        } catch (error) {
          console.error('Error fetching employees:', error);
          setEmployees([]);
        } finally {
          setLoading(false);
        }
    };

    const deleteEmployee = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);
        fetchEmployees();
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
    };
      

  return (
    <div>
      <h2>Employee Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(employees) && employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.address}</td>
                <td>
                  <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
  
};

export default EmployeeTable;
