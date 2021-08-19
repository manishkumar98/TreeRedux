import React from "react";
//import ReactDOM from 'react-dom'
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import App from "./App";
import Child from "./Child";

export default function Parent() {
  const [list, setList] = useState([0]);
  //const [count, setCount] = useState(0);
  const addComponent = () => {
    setList([...list, list.length]);
  };

  const deleteComponent = () => {
    setList([]);
  };
  return (
    <>
      {list.map((id) => (
        <Child key={id} />
      ))}
      <br />
      <br />

      <button onClick={addComponent}>Add more child</button>
      <button onClick={deleteComponent}>x</button>
    </>
  );
}
