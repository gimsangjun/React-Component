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

// redux가 초기화되도(사용자 새로고침) 로그인 유지되게,
// 쿠키의 HttpOnly의 값이 true라면 프론트엔드에서 쿠키 안가져와짐.(백엔드쪽 express-session코드 보면됨.)
// axios에 withCredentials :true를 설정을 하면 자동으로 쿠키를 보냄.
// const sessionID = getValueFromCookie(document.cookie, "sessionID");
store.dispatch(setProfile());
// console.log(document.cookie);
// if (sessionID) {
//   // 사용자 정보 여기서는 username를 가져옴.
//   store.dispatch(setProfile());
// }

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
