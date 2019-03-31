import React, { Component } from "react";

import styles from "./TodoForm.module.css";

import TodoStore from "./store.js";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.todoInput) {
      return;
    }

    TodoStore.add({
      id: +new Date(),
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todoInput: ""
    });
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.todoForm}>
        <div className={styles.formRow}>
          <div className={styles.inputWrapper}>
            <input
              name="todoInput"
              onChange={this.handleChange}
              className={styles.todoInput}
              type="text"
              value={this.state.todoInput}
              placeholder="Что сделать?"
            />
          </div>
          <button type="submit" className={styles.todoButton}>
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
