import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import TodoStore from './store';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Список дел</h2>
      <TodoForm />
      <TodoList todos={TodoStore.todos} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
