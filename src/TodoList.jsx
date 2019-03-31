import React from "react";

import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

import { observer } from 'mobx-react';

const TodoList = props => (
  <ul className={styles.list}>
    {props.todos.map(item => (
      <TodoItem key={item.id} {...item} />
    ))}
  </ul>
);

export default observer(TodoList);
