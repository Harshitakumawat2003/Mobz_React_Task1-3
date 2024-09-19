import React, { useState } from 'react';

function SumOfTwoNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '-' || value === '') {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '-' || value === '') {
      setNum2(value);
    }
  };

  const sum = (Number(num1) || 0) + (Number(num2) || 0);

  return (
    <div>
      <input 
        type="text" 
        value={num1} 
        onChange={handleNum1Change} 
      />
      <input 
        type="text" 
        value={num2} 
        onChange={handleNum2Change} 
      />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumOfTwoNumbers;
