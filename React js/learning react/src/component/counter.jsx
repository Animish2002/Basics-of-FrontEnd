import React from "react";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const plusOne = () => {
    setNum(num + 1);
  };
  const minusOne = () => {
    setNum(num - 1);
  };
  return (
    <div className="flex justify-center items-center p-10 flex-col gap-4">
      {num} num is here
      <button
        onClick={plusOne}
        className="px-3 border-2  bg-gray-400 rounded-md w-[10rem]"
      >
        Increment
      </button>
      <button
        onClick={minusOne}
        className="px-3 border-2 bg-gray-400 rounded-md w-[10rem]"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
