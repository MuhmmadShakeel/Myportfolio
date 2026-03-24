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
      {results.map((data) => (
           <div key={data.id}>
           <div>{data.name}</div>
           <div>{data.email}</div>
           <div>{data.body}</div>
        </div>
      ))}
    </div>
  );
}

export default UseEffect;