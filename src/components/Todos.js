import React, { useState } from "react";

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between cursor-pointer py-1 px-2 mb-2 rounded-md hover:bg-gray-100">
      <span
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        className="ml-2 text-red-500 focus:outline-none hover:text-red-700"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle, onDelete }) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-white rounded-md shadow-md">
      <form onSubmit={onSubmit} className="mb-4 flex">
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          등록
        </button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default Todos;
