import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function Comp() {
  console.log("Comp > render");
  useEffect(() => {
    console.log("Comp > effect");
  });
  return "Comp";
}
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(val => val + 1);
  };
  console.log("render");
  useEffect(() => {
    console.log("effect");
  });
  return (
    <div>
      <button onClick={increment}>increment</button>
      {count}
      <Comp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
