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
import { getValueFromCookie } from "./utils/cookieUtils";
import { setProfile } from "./modules/noticeboard/auth";

// 스토어를 만들고, rootReducer 연결
// 미들웨어 적용, 리덕스 데브툴에 logger 적용
// redux 예제 Todos
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))); // createStore deprecated됨.
// console.log(store.getState()); // 스토어의 상태를 확인

// 사용자가 새고로침하여 redux store의 sessionID가 초기화되고, 쿠키값에 sessionID가 남아있는 경우
const sessionID = getValueFromCookie(document.cookie, "sessionID");
store.dispatch(setProfile());
if (sessionID) {
  // 사용자 정보 여기서는 username를 가져옴.
  store.dispatch(setProfile());
}

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
