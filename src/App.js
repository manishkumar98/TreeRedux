import "./styles.css";
import Parent from "./Parent";
import { render } from "react-dom";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { createStore } from "redux";
import { connect } from "react-redux";

//const createStore=redux.createStore
const INCREMENT = "INCREMENT";
const ADDELEMENT = "ADDELEMENT";
const DELETEELEMENT = "DELETEELEMENT";
function increment() {
  return {
    type: INCREMENT,
    info: "Incrementing counter"
  };
}
const initialState = {
  counter: 0,
  list: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ADDELEMENT:
      return {
        ...state,
        list: [...state.list, action.newItem]
      };
    case DELETEELEMENT:
      let index = state.list.findIndex((x) => x.name === state.n);
      return [...state.list.slice(0, index), ...state.list.slice(index + 1)];

    default:
      return state;
  }
};
/*function rootReducer(state=[],action){
  switch(action.type){
    case 'INCREMENT':
        return state.concat([action.data])
    case 'ADDELEMENT':
        return state.concat([action.data])
    case 'DELETEELEMENT':
        return state.concat([action.data])
    default:
        return state
  }
}*/
//let store=createStore(rootReducer);
export default function App() {
  const [list, setList] = useState([0]);
  const deleteComponent = () => {
    setList([]);
  };
  const addComponent = () => {
    setList([...list, list.length]);
  };
  store.subscribe(() => console.log(store.getState()));

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
const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(increment());
unsubscribe();
