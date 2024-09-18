import React, { useState } from 'react';

function SumOfTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
      />
      <p>Sum: {num1 + num2}</p>
    </div>
  );
}

export default SumOfTwoNumbers;
