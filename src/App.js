import React, { Component } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Main from "./Main.js";

class App extends Component {
  // state = {
  //   Predicted_Class: [],
  //   Predicted_Class_2: []
  // };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
