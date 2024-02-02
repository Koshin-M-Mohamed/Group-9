import React from "react";

function Table({ data, cols }) {
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
        {data.map((row, index) =>
          // create a row element for each row index in the data
          (<tr key={index}>
            {cols.map(col =>
              (<td key={`${index}-${col}`}>{row[col]}</td>)) // Corrected to use template literal syntax
            }
          </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
