import React from 'react';
import { useEffect } from 'react';

function Timer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('.');
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('!');
    };
  }, []);
  return (
    <div>
      <span>timer start. watch console.</span>
    </div>
  );
}

export default Timer;
