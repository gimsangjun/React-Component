import React, { useReducer, useRef } from "react";
import "../scss/TodoTemplate.scss";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import data from "../data/todoList.json";
import reducer from "../modules/todoReducer.js";

export default function TodoTemplate() {
  // useReducer 훅을 사용하여 상태와 디스패치 함수 설정
  const [todos, dispatch] = useReducer(reducer, data);
  const idNum = useRef(data.length + 1);

  // reducer를 사용하지 않고, 했을경우
  // useCallaback을 사용하는이뉴는 handle 함수를 메모이제이션을 통해
  // 재랜더링 될때마다 다시 선언되는 것을 막기위함 => 최적화를 위해
  // const handleInsert = useCallback(
  //   (todo) => {
  //     const newTodo = { id: idNum.current, todo, checked: false };
  //     setTodos([...todos, newTodo]);
  //     idNum.current += 1;
  //   },
  //   [todos]
  // );

  // const handleDelete = useCallback((id) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // const handleChecked = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  //   );
  // });

  return (
    <div className="main">
      <div className="title">일정관리</div>
      <TodoInsert
        handleInsert={(todo) => {
          dispatch({ type: "insert", todo });
          idNum.current += 1;
        }}
      />
      <TodoList
        todos={todos}
        handleDelete={(id) => dispatch({ type: "delete", id })}
        handleChecked={(id) => dispatch({ type: "checked", id })}
      />
    </div>
  );
}
