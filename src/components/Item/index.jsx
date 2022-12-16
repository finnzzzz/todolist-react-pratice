import React, { Component } from "react";

export default class Item extends Component {
  state = {
    mouse: false,
  };

  //鼠標移入 移出回調
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  //勾選，取消勾選某一個todo的回調
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //刪除一個todo的回調
  handleDelete = (id) => {
    if (window.confirm("確定刪除")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
