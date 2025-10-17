import React, { useState } from "react";

const EmployeeTable = () => {
  const initialData = [
    { name: "John Doe", department: "Finance", salary: 50000 },
    { name: "Jane Smith", department: "HR", salary: 60000 },
    { name: "Mike Johnson", department: "IT", salary: 75000 },
    { name: "Emily Davis", department: "Marketing", salary: 65000 },
    { name: "Robert Brown", department: "IT", salary: 72000 },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Employee Data</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("department")}>Department</th>
            <th onClick={() => handleSort("salary")}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// CSS styles (inline for simplicity)
const styles = {
  table: {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
    cursor: "pointer",
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
  },
};

export default EmployeeTable;
