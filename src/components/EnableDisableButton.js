import React, { useState } from 'react';

function EnableDisableButton() {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <div>
      <button disabled={isDisabled}>Click me!</button>
      <button onClick={() => setDisabled(!isDisabled)}>
        {isDisabled ? 'Enable' : 'Disable'}
      </button>
    </div>
  );
}

export default EnableDisableButton;
