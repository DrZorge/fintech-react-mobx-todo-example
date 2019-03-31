import React, { Component } from "react";
import cn from "classnames";

import TodoStore from './store.js';

import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  handleRemove = () => TodoStore.remove({ id: this.props.id });

  handleToggle = () => TodoStore.toggle({ id: this.props.id });

  render() {
    return (
      <li className={cn(styles.item, { [styles.itemDone]: this.props.done })}>
        {this.props.title}
        <span onClick={this.handleToggle} className={styles.done}>
          &#10004;
        </span>
        <span onClick={this.handleRemove} className={styles.remove}>
          &times;
        </span>
      </li>
    );
  }
}

export default TodoItem;
