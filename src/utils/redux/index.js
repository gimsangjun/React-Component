import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const store = createStore(rootReducer); // 스토어를 만들고, rootReducer 연결
console.log(store.getState()); // 스토어의 상태를 확인

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CounterContainer />
    <br />
    <TodosContainer />
  </Provider>
);
