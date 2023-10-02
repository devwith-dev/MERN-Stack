import React, { useState } from "react";

export default function Hooks() {
  const [num, setNum] = useState(0);
  const newNum = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={newNum}>{num}</button>
    </div>
  );
}
