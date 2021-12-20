import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./exercise";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자도구

import rootReducer from "./modules";

// 스토어 생성, 리덕스 개발자 도구 활성화
const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

// 리덕스 스토어 전역 설정
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
