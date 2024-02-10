import React, { useState } from "react";

function Table({ data, cols, renderCell }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key !== null) {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];
      if (keyA < keyB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (keyA > keyB) return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          {/* generate a table header for each column in our data */}
          {cols.map(col => (
            <th key={col} onClick={() => requestSort(col)}>
              {col}
              {sortConfig.key === col && (
                sortConfig.direction === 'asc' ? ' ↓' : ' ↑'
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) =>
          // create a row element for each row index in the data
          (<tr key={rowIndex}>
            {cols.map(col =>
              // Conditional rendering if renderCell is provided
              renderCell ? 
              <td key={`${rowIndex}-${col}`}>{renderCell(col, row[col], row, rowIndex)}</td> :
              <td key={`${rowIndex}-${col}`}>{row[col]}</td>
            )}
          </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;