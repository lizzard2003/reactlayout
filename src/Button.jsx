import React, { useState } from 'react';

function ButtonWithClickCount() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Button has been clicked {clickCount} times.</p>
    </div>
  );
}

export default ButtonWithClickCount;
