/* 액션 타입 선언 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = [
  { id: 1, text: "React 공부하기", done: false },
  { id: 2, text: "프로젝트 계획 세우기", done: true },
  { id: 3, text: "책 읽기", done: false },
];

/* 액션 생성함수 선언 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
let nextId = initialState.length + 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

// 리듀서는 export default 로 내보내주세요.
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter((todo) => (todo.id === action.id ? "" : todo));
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    default:
      return state;
  }
}
