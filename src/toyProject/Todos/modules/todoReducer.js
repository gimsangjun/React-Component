export default function reducer(state, action) {
  switch (action.type) {
    case "insert":
      return [...state, action.todo];
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "checked":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return state;
  }
}
