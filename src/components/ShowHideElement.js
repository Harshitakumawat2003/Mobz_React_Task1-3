import React, { useState } from 'react';

function ShowHideElement() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <p>Heyyy!!!.....How are you?</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default ShowHideElement;
