import React, { useState } from "react";

const cards = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The number {count} is {count % 2 === 0 ? "even" : "odd"}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default cards;
