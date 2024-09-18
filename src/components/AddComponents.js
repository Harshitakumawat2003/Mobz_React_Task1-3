import React, { useState } from 'react';

function AddComponents() {
  const [components, setComponents] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addComponent = () => {
    if (inputValue.trim() !== '') {
      setComponents([...components, inputValue]);
      setInputValue(''); // Clear the input after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addComponent}>Add Component</button>
      <ul>
        {components.map((component, index) => (
          <li key={index}>{component}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddComponents;
