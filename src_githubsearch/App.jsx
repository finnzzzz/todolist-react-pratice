import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  state = {
    users: [], //初始化狀態，user初始值為數組
    isFirst: true,
    isLoading: false,
    err: "",
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
