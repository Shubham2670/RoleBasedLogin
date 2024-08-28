import React from 'react';

const ChildComponent = React.memo(({ increment }) => {
  console.log('ChildComponent re-rendered');

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={increment}>Increment from Child</button>
    </div>
  );
});

export default ChildComponent;
