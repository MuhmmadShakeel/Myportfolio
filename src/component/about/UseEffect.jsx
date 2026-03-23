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
      {results.map((value) => (
           <div key={value.id}>
           <div>{value.name}</div>
           <div>{value.email}</div>
           <div>{value.body}</div>
        </div>
      ))}
    </div>
  );
}

export default UseEffect;