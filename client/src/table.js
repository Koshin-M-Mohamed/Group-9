import React from "react";

function Table({ data, cols, renderCell }) {
  return (
    <table>
      <thead>
        {/* header row */}
        <tr>
          {/* generate a table header for each column in our data */}
          {cols.map(col => (<th key={col}>{col}</th>))}
        </tr>
      </thead>
      {/* table main body */}
      <tbody>
        {data.map((row, rowIndex) =>
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

