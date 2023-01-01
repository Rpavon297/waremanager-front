import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#5a5b63", height: '100vh', minHeight : '100vh'}}>
        <Fragment>
          <Header />
          <Dashboard />
        </Fragment>
      </div>
    );
  }
}

export default App;
