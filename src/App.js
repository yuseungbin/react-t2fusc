import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
import Timer from './component/timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        ToggleTIMER
      </button>
    </div>
  );
}

export default App;
