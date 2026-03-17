import React, { useEffect, useState } from 'react';
function UseEffect() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.log('Error in getting the data', error);
      });
  }, []);
  return (
    <div>
      {results.map((result) => (
           <div key={result.id}>
           <div>{result.name}</div>
           <div>{result.email}</div>
           <div>{result.body}</div>
        </div>
      ))}
    </div>
  );
}

export default UseEffect;