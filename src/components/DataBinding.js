import React, { useState } from 'react';

function DataBinding() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Input Text: {text}</p>
    </div>
  );
}

export default DataBinding;
