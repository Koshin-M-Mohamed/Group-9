import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
          row ? 
          (<tr key={rowIndex}>
            {cols.map(col =>
              renderCell ? 
              <td key={`${rowIndex}-${col}`}>{renderCell(col, row ? row[col] : null, row, rowIndex)}</td> :
              <td key={`${rowIndex}-${col}`}>{row && row[col] != null ? row[col] : 'N/A'}</td>
            )}
          </tr>) 
          : null
        )}
      </tbody>
    </table>
  );
}

export default Table;