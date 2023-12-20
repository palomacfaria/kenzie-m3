import { useRef } from "react";

export const UseRef = () => {
  const example = useRef(null);

  return (
    <div className="App">
      <button onClick={() => console.log(example.current)}>Debug</button>
      <h1 ref={example}>Exemplo</h1>
    </div>
  );
};
