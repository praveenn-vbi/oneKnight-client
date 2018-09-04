import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {NewDashboard} from "./Components/NewDashboard"
import "normalize.css";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <h1 className="main-header__title"> One Knight </h1>
        </header>
        <section className="container">
        <NewDashboard></NewDashboard>
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
