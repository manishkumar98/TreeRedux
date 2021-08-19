import React from "react";
//import ReactDOM from 'react-dom'
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import App from "./App";
import Parent from "./Parent";
export default function Child() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <br />
      <br />
      <button onClick={handleCount}>+</button>

      <p>Counter : {count}</p>
    </>
  );
}
