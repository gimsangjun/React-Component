import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";
import noticeboard from "./noticeboard";

// 여러개의 리듀서가 있을경우 이렇게 루트 리듀서로 하나로 묶을수 있다.
const rootReducer = combineReducers({
  todos,
  counter,
  posts,
  noticeboard,
});

export default rootReducer;
