import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  //狀態在哪裡 操作狀態的方式就在哪裡

  //初始化狀態
  state = {
    todos: [
      { id: "001", name: "吃飯", done: true },
      { id: "002", name: "睡覺", done: true },
      { id: "003", name: "運動", done: false },
    ],
  };

  //用來添加一個todo，接收的參數是todo對象
  addTodo = (todoObj) => {
    //獲取原todos
    const { todos } = this.state;
    //追加一個todo
    const newTodos = [todoObj, ...todos];
    //更新狀態
    this.setState({ todos: newTodos });
  };

  //用來更新一個todo對象
  updateTodo = (id, done) => {
    //獲取狀態中的todos
    const { todos } = this.state;
    //匹配數據
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  //用來刪除todo
  deleteTodo = (id) => {
    //獲取原todos
    const { todos } = this.state;
    //刪除指定id的todo對象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  //全選選項
  checkAllTodo = (done) => {
    const { todos } = this.state;
    // 加工數據
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }; //done:true or false
    });
    this.setState({ todos: newTodos });
  };

  //清除已經完成
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false; //留下未完成的
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
