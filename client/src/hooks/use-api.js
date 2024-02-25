import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:9000';

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    const isFullPath = path.startsWith('http://') || path.startsWith('https://');
    const url = isFullPath ? path : `${API_ROOT}/${path}`;
    console.log("The url is: ", url);

    fetch(url)
      .then(res => res.text())
      .then(text => setResponse(text))
      .catch(error => {
        console.error("Error fetching data:", error);
        setResponse(null);
      }); 
      
  }, [path]);

  return {
    response
  };
}
