import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // This expensive calculation will only re-run when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    return count * 2;
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">useMemo Hook Example</h1>
      <p className="mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Increment Count
      </button>
      <p className="mb-2">Expensive Calculation Result: {expensiveCalculation}</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        className="border px-2 py-1"
      />
      <p className="mt-2">Input Value: {inputValue}</p>
    </div>
  );
};

export default UseMemoExample;
