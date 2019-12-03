import React, { Component } from "react";
import { Route } from "react-router-dom";
import landing from "./landing";
import graph from "./graph.js";

class Main extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/form" component={Form}/>  */}
        <Route path="/" exact={true} component={landing} />
        <Route exact path="/exploratory" component={graph} />
        {/* <Route path="/form" component={form} />
        <Route path="/water" component={water} /> */}{" "}
        
      </div>
    );
  }
}

export default Main;
