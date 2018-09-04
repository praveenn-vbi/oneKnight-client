import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Message from "./Components/Message/Message.js";
import "normalize.css";
import "./App.css";
import armyKnife from "./swiss-army-knife.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <h1 className="main-header__title"> One Knight </h1>
        </header>
        <section className="container">
          <Message message="Welcome to the react-starter. Start hacking away!" />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
