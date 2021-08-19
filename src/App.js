import "./styles.css";
import Parent from "./Parent";
import { render } from "react-dom";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
/*export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
*/

export default function App() {
  const [list, setList] = useState([0]);
  const deleteComponent = () => {
    setList([]);
  };
  const addComponent = () => {
    setList([...list, list.length]);
  };

  return (
    <>
      {list.map((id) => (
        <Parent key={id} />
      ))}
      <button onClick={addComponent}>Add Child</button>
      <button onClick={deleteComponent}>x</button>
    </>
  );
}
