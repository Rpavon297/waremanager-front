import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
