import React from 'react';

function DisplayArray() {
  const items = ['React', 'Vue', 'Angular'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default DisplayArray;
