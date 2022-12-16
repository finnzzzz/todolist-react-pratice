import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleKeyUp = (event) => {
    //解構賦值獲取key,target
    const { key, target } = event;
    //判斷是否按下enter
    if (key !== "Enter") return;
    //添加todo不能為空
    if (target.value.trim() === "") {
      alert("輸入不能為空");
      return;
    }
    //準備好一個todoObj
    const todoObj = { id: nanoid(), name: target.value, done: false };
    //將todoObj傳給App
    this.props.addTodo(todoObj);
    //清空輸入
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="輸入任務，按enter確認"
        />
      </div>
    );
  }
}
