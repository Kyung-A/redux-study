import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./exercise";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./modules";

// 스토어 생성
const store = createStore(rootReducer);
console.log(store.getState());

// 리덕스 스토어 전역 설정
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
