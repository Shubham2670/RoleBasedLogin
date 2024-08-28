import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized callback function that increments count
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  // Memoized callback function to handle text change
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={incrementCount}>Increase Count</button>
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type something..." 
      />
      <ChildComponent increment={incrementCount} />
    </div>
  );
};

export default ParentComponent;
