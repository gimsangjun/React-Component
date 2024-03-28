import { combineReducers } from "redux";
import todos from "./todos";

// 여러개의 리듀서가 있을경우 이렇게 루트 리듀서로 하나로 묶을수 있다.
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
