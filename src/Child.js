import React from "react";
//import ReactDOM from 'react-dom'
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import App from "./App";
import Parent from "./Parent";
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 0,
      count: 0
      // f: 0
    };
  }
  addChild(key, value) {
    this.setState({ [key]: value + 1 });
    //this.setState({ f: 1 });
    console.log(value);
  }

  handleCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        <br />
        <br />
        <button onClick={() => this.handleCount()}>+</button>

        <p>Counter : {this.state.count}</p>
      </>
    );
  }
}

export default Child;
