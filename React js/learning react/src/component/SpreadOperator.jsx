import React, { useRef, useState } from "react";

const SpreadOperator = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = () => {
    countRef.current += 1;
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default SpreadOperator;
