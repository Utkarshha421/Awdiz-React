import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  useEffect(() => {
    alert("Inside useEffect.");
  });
  return (
    <div>
      <h2>UseEffect</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>-</button>
    </div>
  );
}

export default UseEffect;
