import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 루트 리듀서
// 한 프로젝트에 여러개의 리듀서가 있을때는 이를 한 리듀서로 합쳐야한다
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
