import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../../components/redux_example/Todos";
import { addTodo, toggleTodo, deleteTodo } from "../../modules/todos";

function TodosContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  // reducer가 여러개가 있을수 있기 때문에 원하는 리듀서에 접근한뒤 state를 조회해야함.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));
  const onDelete = (id) => dispatch(deleteTodo(id)); // 최적화를 위해 useCallback 사용할수도있음.

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onDelete={onDelete} />;
}

export default TodosContainer;
