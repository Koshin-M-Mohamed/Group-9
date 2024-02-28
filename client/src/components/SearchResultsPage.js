import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  console.log("We have received the searchResults");
  console.log(searchResults);

  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>PATIENT_ID</th>
            <th>exam_Id</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((exam) => (
            <tr key={`${exam.PATIENT_ID}-${exam.exam_Id}`}>
              <td>{exam.PATIENT_ID}</td>
              <td>{exam.exam_Id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResultsPage;