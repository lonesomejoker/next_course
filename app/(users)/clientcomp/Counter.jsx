import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className=" px-6 py-3 rounded-sm bg-blue-400 text-white"
      onClick={() => setCount((prev) => prev + 1)}
    >
      ADD:{count}
    </button>
  );
};
