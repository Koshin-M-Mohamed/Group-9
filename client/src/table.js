import React, { useState } from "react";

function Table({ data, cols }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });

  const handleSort = (col) => {
    let direction = "asc";

    if (sortConfig.key === col && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const newSortedData = [...data].sort((a, b) => {
      if (a[col] < b[col]) return direction === "asc" ? -1 : 1;
      if (a[col] > b[col]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(newSortedData);
    setSortConfig({ key: col, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          {cols.map(col => (
            <th key={col} onClick={() => handleSort(col)}>
              {col} {sortConfig.key === col && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {cols.map(col => (
              <td key={`${index}-${col}`}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;