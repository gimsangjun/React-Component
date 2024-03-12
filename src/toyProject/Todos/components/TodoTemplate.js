import React, { useReducer, useRef, useCallback } from "react";
import "../scss/TodoTemplate.scss";
import TodoInsert from "./TodoInsert.js";
import TodoList from "./TodoList.js";
import data from "../data/todoList.json";
import reducer from "../modules/todoReducer.js";

export default function TodoTemplate() {
  const [todos, dispatch] = useReducer(reducer, data);
  const idNum = useRef(data.length + 1);

  const handleInsert = useCallback((todo) => {
    dispatch({ type: "insert", todo: { id: idNum.current, todo: todo, checked: false } });
    idNum.current += 1;
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({ type: "delete", id });
  }, []);

  const handleChecked = useCallback((id) => {
    dispatch({ type: "checked", id });
  }, []);

  return (
    <div className="main">
      <div className="title">일정관리</div>
      <TodoInsert
        handleInsert={(todo) => {
          handleInsert(todo);
          idNum.current += 1;
        }}
      />
      <TodoList todos={todos} handleDelete={handleDelete} handleChecked={handleChecked} />
    </div>
  );
}
