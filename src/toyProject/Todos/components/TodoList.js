import React from "react";
import TodoListItem from "./TodoListItem";
import "../scss/TodoList.scss";

export default function TodoList({ todos, handleDelete, handleChecked }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todoData={todo}
          handleDelete={handleDelete}
          handleChecked={handleChecked}
        />
      ))}
    </div>
  );
}
