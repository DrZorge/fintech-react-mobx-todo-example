import { observable } from "mobx";

class TodoStore {
  todos = observable([
    { id: 1, title: "Выпить кофе", done: false },
    { id: 2, title: "Изучить HTML, CSS", done: false },
    { id: 3, title: "Изучить JS", done: false }
  ]);

  add(todo) {
    this.todos.push(todo);
  }

  getItemById(id) {
    return this.todos.find(item => item.id === id);
  }

  remove(todo) {
    this.todos.remove(this.getItemById(todo.id));
  }

  toggle(todo) {
    const item = this.getItemById(todo.id);

    if (item) {
      item.done = !item.done;
    }
  }
}

export default new TodoStore();
