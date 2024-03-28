import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import myLogger from "./middlewares/myLogger";

// 스토어를 만들고, rootReducer 연결
// 미들웨어 적용, 리덕스 데브툴에 logger 적용
// redux 예제 Todos
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, myLogger))
); // createStore deprecated됨.
// console.log(store.getState()); // 스토어의 상태를 확인

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
